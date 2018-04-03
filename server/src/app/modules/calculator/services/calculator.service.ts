import { Component } from '@nestjs/common';
import axios from 'axios';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

@Component()
export class CalculatorService {
  constructor() {}
  private priceUAH = 0;

  /**
   * Get UAH price in usd
   *
   * @private
   * @memberof CalculatorService
   */
  private async getUAH(): Promise<any> {
    await axios
      .get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
      .then(res => {
        const currency = res.data.find(item => item.ccy === 'USD');
        this.priceUAH = currency.buy;
        return currency.buy;
      })
      .catch(() => {
        return Promise.reject('Error, cannot fetch API')
      });
  }
  /**
   * Get electricity per day buy build power
   */
  private getElectricityPerDay(buildPower, UAHprice) {
    const settings = {
      kwtCostLow: 0.9,
      kwtCostMax: 1.68,
      hoursAtMonth: 31 * 24,
      lowKwt: 100,
      maxKwt: 3000,
    };
    const kwtPerMount = settings.hoursAtMonth * buildPower / 1000;
    const date = {
      compareDate: moment(),
      startDateMax: moment('01/05/2018', 'DD/MM/YYYY'),
      endDateMax: moment('30/09/2018', 'DD/MM/YYYY'),
    };
    const costElectricityPerYear = Array(12)
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
    const costSum = costElectricityPerYear.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
    );
    const costElectricityPerDay = costSum / 12 / 31;
    return costElectricityPerDay / UAHprice;
  }

  /**
   * Calculate revenue and other stuff
   * @param data<{currency, hash, power, price}>
   * @returns {Promise<{priceUAH : number; electricityPerDay : number; monthesToPayback : string}>}
   */
  public async calculate(data) {
    const { currency, hash, power, price } = data;
    const { code } = CalculatorService[currency];
    try {
      const { revenue, profit } = (await axios.get(
        `http://whattomine.com/coins/${code}.json?hr=${hash}&p=${power}&fee=0.0&cost=0.1&`,
      )).data;
      const priceUAH: number = await this.getUAH();
      const electricityPerDay = this.getElectricityPerDay(power, priceUAH);
      const monthesToPayback = (price / priceUAH / profit).toFixed(0);
      const totalRevenue = {
        day: revenue,
        month: revenue * 30,
        year: revenue * 30 * 12,
      };
      return {
        priceUAH,
        electricityPerDay,
        monthesToPayback,
      };
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
