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
  private getElectricityCostPerYear(settings, kwtPerMount) {
    const date = {
      compareDate: moment(),
      startDateMax: moment('01/05/2018', 'DD/MM/YYYY'),
      endDateMax: moment('30/09/2018', 'DD/MM/YYYY'),
    };
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
  private getElectricityCostPerDay(power) {
    const settings = {
      kwtCostLow: 0.9,
      kwtCostMax: 1.68,
      hoursAtMonth: 31 * 24,
      lowKwt: 100,
      maxKwt: 3000,
    };
    const kwtPerMount = settings.hoursAtMonth * power / 1000;
    const costElectricityPerYear = this.getElectricityCostPerYear(
      settings,
      kwtPerMount,
    );
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
      console.log(`http://whattomine.com/coins/${currency}.json?hr=${hashRate}&p=${power}&fee=0.0&cost=0.1&`);
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
  public async calculate(data) {
    try {
      const currenciesCodes = {
        ETC: '162-etc-ethash',
        ETH: '151-eth-ethash',
        ZEC: '166-zec-equihash',
        BTG: '214-btg-equihash',
      };
      const { hashRate, solsRate, power, price: minerPrice } = data;
      const priceUAHToUSD = await this.getPriceUAHToUSD();
      const electricityPerDay = this.getElectricityCostPerDay(power);
      const revenueList = Object.keys(currenciesCodes).map(async currency => {
        const rate = currency !== 'ZEC' && currency !== 'BTG' ? hashRate : solsRate;
        const code = currenciesCodes[currency];
        const { revenue } = await this.getRevenue(code, rate, power);
        const profit = ( revenue * priceUAHToUSD ) - electricityPerDay;
        const daysToPayback = (minerPrice / profit).toFixed(0);
        const totalProfit = {
          day: Number(profit).toFixed(2),
          month: (profit * 31).toFixed(2),
          year: (profit * 31 * 12).toFixed(2),
        };
        return {
          profitPerDay: profit,
          currency,
          daysToPayback,
          totalProfit
        };
      });
      return {
        minerPrice,
        electricityPerDay,
        data: await Promise.all(revenueList)
      };
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
