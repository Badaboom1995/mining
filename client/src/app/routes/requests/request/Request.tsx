import { IRequestProps } from "./Props";
import * as classNames from 'classnames';






export const Request = ({ onDelete, onCheck, checked, name, status, date, type } : IRequestProps) => {
	return (
		<div className={ classNames('request-item', { 'request-item--checked': checked })} >		
			{/* <div onClick={onCheck} className={ classNames('request-item__checkbox', { 'request-item__checkbox--checked': checked })} ></div> */}
			<div className='request-item__name' >{name}</div>
			<div className='request-item__type' >{type}</div>
			<div className='request-item__date' >{date}</div>
			<div className="request-item__trust">
				<i className='icon-flag' ></i>
				<div>Оплачено</div>
			</div>
			<div className='request-item__status' >
				<div className='request-item__status-indicator' ></div>
				<div>{status}</div>
			</div>
			{/* <div>
				<div onClick={onDelete} className="icon-button-close"></div>
			</div> */}
		</div>
	)
}