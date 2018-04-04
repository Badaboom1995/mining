import { Component } from '@nestjs/common';
import axios from 'axios';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

@Component()
export class CalculatorService {
  constructor() {}

  /**
   * Get UAH price in usd
   * @returns {Promise<{number}>}
   */
  private async getPriceUAHToUSD() {
    try {
      const { data } = await axios.get(
        'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
      );
      const currency = data.find(item => item.ccy === 'USD');
      return currency.buy;
    } catch {
      return Promise.reject('Error, cannot fetch PrivatBack API');
    }
  }

  /**
   * Get Miner cost electricity per year
   * @param date
   * @param settings
   * @param kwtPerMount
   * @returns {any[]}
   */
  private costElectricityPerYear(date, settings, kwtPerMount) {
    return Array(12)
      .fill(0)
      .map((_, i) => {
        const currentMonth = date.compareDate.clone().add(++i, 'months');
        const range = moment.range(date.startDateMax, date.endDateMax);
        const isMonthInRange = range.contains(currentMonth);
        const maxKwtInThisMonth = isMonthInRange
          ? settings.maxKwt
          : settings.lowKwt;
        if (kwtPerMount <= maxKwtInThisMonth) {
          return kwtPerMount * settings.kwtCostLow;
        }
        const min = maxKwtInThisMonth * settings.kwtCostLow;
        const max = (kwtPerMount - maxKwtInThisMonth) * settings.kwtCostMax;
        return min + max;
      });
  }

  /**
   * Get electricity per day buy build power
   * @param power
   * @returns {number}
   */
  private getElectricityPerDay(power) {
    const settings = {
      kwtCostLow: 0.9,
      kwtCostMax: 1.68,
      hoursAtMonth: 31 * 24,
      lowKwt: 100,
      maxKwt: 3000,
    };
    const date = {
      compareDate: moment(),
      startDateMax: moment('01/05/2018', 'DD/MM/YYYY'),
      endDateMax: moment('30/09/2018', 'DD/MM/YYYY'),
    };
    const kwtPerMount = settings.hoursAtMonth * power / 1000;
    const costElectricityPerYear = this.costElectricityPerYear(date, settings, kwtPerMount);
    const costSum = costElectricityPerYear.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
    );
    return costSum / 12 / 31;
  }

  /**
   * Get Miner revenue
   * @param currency
   * @param hashRate
   * @param power
   * @returns {Promise<{number}>}
   */
  private async getRevenue(currency, hashRate, power) {
    try {
      const { revenue, profit } = (await axios.get(
        `http://whattomine.com/coins/${currency}.json?hr=${hashRate}&p=${power}&fee=0.0&cost=0.1&`,
      )).data;
      return {
        revenue: revenue.replace('$', ''),
        profit: profit.replace('$', ''),
      };
    } catch (err) {
      return Promise.reject(err);
    }
  }
  /**
   * Calculate revenue and other stuff
   * @param data<hash, power, price>
   * @param currency<String>
   * @returns {Promise<any>}
   */
  public async calculate(data, currency) {
    try {
      const { hashRate, power, price: minerPrice } = data;
      const { revenue, profit } = await this.getRevenue(
        currency,
        hashRate,
        power,
      );
      const priceUAHToUSD: number = await this.getPriceUAHToUSD();
      const electricityPerDay: number = this.getElectricityPerDay(power);
      const monthsToPayback = (minerPrice / priceUAHToUSD / profit).toFixed(0);
      const totalRevenue = {
        day: revenue,
        month: revenue * 31,
        year: revenue * 31 * 12,
      };
      return {
        priceUAHToUSD,
        electricityPerDay,
        monthsToPayback,
        totalRevenue,
      };
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
