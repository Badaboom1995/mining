import { ICalculatorProps } from "./Props";
import { observer, inject } from 'mobx-react';
import * as classNames from 'classnames';



@inject('miningCalculator')
@observer
export class Calculator extends React.Component<ICalculatorProps> {
	/**
	 * Initial calculation
	 */
	public componentWillMount() {
		const { miningCalculator } = this.props;
		miningCalculator.calculate();
	}
	/**
	 * render
	 */
	public render() {
		const { miningCalculator } = this.props;
		return (
			<div className='calculator'>
				<h2 className="calculator__title">Калькулятор окупності</h2>
				<div className='calculator__block'>
					<h3 className='calculator__block-title'>ОБЕРІТЬ ОДИН З ДВОХ НАЙКРАЩИХ МАЙНЕРІВ</h3>
					<div className='calculator__block-controls'>
						{miningCalculator.minerTypes.map(minerType => {
							const className = classNames(
								'calculator__radio-button', 
								'calculator__radio-button--active',
								 'calculator__radio-button--type',
								 { active: minerType == miningCalculator.selectedMinerType }
							);
							return (
								<span onClick={miningCalculator.selectdMinerType.bind(null, minerType)} key={minerType.name} className={className}>{minerType.displayName}</span>
							);
						})}
					</div>
				</div>
				<div className='calculator__block'>
					<h3 className='calculator__block-title'>ТАРИФ НА ЕЛЕКТРОЕНЕРГІЮ</h3>
					<div className='calculator__block-controls--small'>
						{miningCalculator.tariffs.map(tariff => {
							const className = classNames(
								'calculator__radio-button', 
								{ 'active' : tariff == miningCalculator.selectedTariff },
								'calculator__radio-button--stars',
								`calculator__radio-button--${tariff.icon}-stars`
							);
							return (
								<span onClick={miningCalculator.selectTariff.bind(null, tariff)} key={tariff.name}  className={className}>{tariff.displayName}</span>
							);
						})}
						
					</div>
				</div>
				<div className='calculator__block'>
					<h3 className='calculator__block-title'>ОБЕРІТЬ МОНЕТУ ЯКУ ВИ БУДЕТЕ МАЙНИТИ</h3>
					<div className='calculator__block-controls'>
						<ul className="calculator__tabs">
							{miningCalculator.currencies.map(currency => {
								return (
									<li 
										key={currency.name} 
										className={ classNames("calculator__tabs-item", { active: currency == miningCalculator.selectedCurrency})}
										onClick={miningCalculator.selectCurrency.bind(null, currency)}
									>{currency.displayName}</li>
								);
							})}
							
						</ul>
						<ul className="calculator__tabs-content">
							<li className="calculator__tab-content active">
								{miningCalculator.selectedCurrency.description}
                            </li>
						</ul>
					</div>
				</div>
				<div className='calculator__block'>
					<h3 className='calculator__block-title'>ВАШ ПРИБУТОК </h3>
					<div className='calculator__block-controls--small'>
						<table className="calculator__table">
							<tbody>
								<tr>
									<th className="calculator__table-head">На добу</th>
									<th className="calculator__table-head">В мiсяц</th>
									<th className="calculator__table-head">В рiк</th>
								</tr>
								<tr >
									<td className="calculator__table-row">3375 гривень</td>
									<td className="calculator__table-row">21000 гривень</td>
									<td className="calculator__table-row">90000 гривень</td>
								</tr>
								<tr>
									<td className="calculator__table-row">1775 гривень</td>
									<td className="calculator__table-row">6000 гривень</td>
									<td className="calculator__table-row">20000 гривень</td>
								</tr>
								<tr className="calculator__table-row--active">
									<td className="calculator__table-row">3375 гривень</td>
									<td className="calculator__table-row">21000 гривень</td>
									<td className="calculator__table-row">90000 гривень</td>
								</tr>
								<tr>
									<td className="calculator__table-row">3375 гривень</td>
									<td className="calculator__table-row">9000 гривень</td>
									<td className="calculator__table-row">190000 гривень</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="calculator__motivate-text">
					<p>ВАША УСТАНОВКА ОКУПИТЬСЯ ЧЕРЕЗ <span>~9 МІСЯЦІВ </span></p>
					<p>І БУДЕ ДАЛІ ПРИНОСИТИ <span>~300$</span> ЧИСТОГО ПРИБУТКУ КОЖЕН МІСЯЦЬ.</p>
				</div>
			</div>
		);
	}
}