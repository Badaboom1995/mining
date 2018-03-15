import { IInfoModalProps } from "./Props";
import { Card } from "../../../../components/card/Card";





export class InfoModal extends React.Component<IInfoModalProps> {
	/**
	 * Banner block
	 */
	public Banner = () => {
		const { miner, onClose } = this.props;
		return (
			<div className='miner-info-modal-banner' >
				<div className='miner-info-modal-banner__info' >
					<div className='miner-info-modal-banner__name' >{miner.name}</div>
					<div className='miner-info-modal-banner__video' >{miner.video}</div>
				</div>
				<div className='miner-info-modal-banner__price' >
					${miner.price}
				</div>
				<div className='miner-info-modal-banner__button' >Купити</div>
				<div className='miner-info-modal-banner__close' >
					<i onClick={onClose} className="icon-close-button"></i>
				</div>
			</div>
		);
	}

	/**
	 * Specs array placeholder
	 */
	public specs = [
		{ name: 'Объём памяти', value: '9999 мб' },
		{ name: 'Шина памяти', value: '12313' },
		{ name: 'Графический процессор', value: 'AMD RADEON RX 570' },
		{ name: 'Частота графического ядра', value: 'over 9k' },
		{ name: 'Частота видеопамяти', value: '1233 ггц' },
		{ name: 'Максимальное разрешение', value: '8024x8024' },
		{ name: 'Кол - во графических процессоров', value: '8' },
		{ name: 'Тип памяти', value: 'DDR100500' },
		{ name: 'Семейство процессора', value: 'IDK' },
	];

	/**
	 * Grid with miner specs
	 */
	public SpecGrid = () => {
		return (
			<table className='miner-spec-grid' >
				<tbody  >
					{this.specs.map((item, index) => {
						return (
							<tr className='miner-spec-grid__row' key={index} >
								<td title={item.name} className='miner-spec-grid__cell' >{item.name}</td>
								<td title={item.value} className='miner-spec-grid__cell' >{item.value}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}


	/**
	 * Modal content section wrapper
	 */
	public Section = ({ className = '', title = '', children, ...props }) => {
		return (
			<section className={`miner-info-modal-section ${className}`} >
				<h4 className='miner-info-modal-section__title' >{title}</h4>
				<div className='miner-info-modal-section__content' >{children}</div>
			</section>
		)
	}
	/**
	 * render
	 */
	public render() {
		const { Banner, Section, SpecGrid } = this;
		return (
			<div className='overlay' >
				<Card className='miner-info-modal' >
					<Banner />
					<div className='miner-info-modal__content' >
						<div className='miner-info-modal__content-scrollable' >
							<Section title='Описание' >
								<p className='miner-info-modal-section__text' >Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. </p>
							</Section>
							<Section title='Технические характеристики' >
								<SpecGrid />
							</Section>
							<Section title='Майнинг' >
								<p className='miner-info-modal-section__text' > Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. </p>
							</Section>
						</div>

					</div>
				</Card>
			</div>
		);
	}
}