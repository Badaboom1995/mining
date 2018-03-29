import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { IReferalProps } from './Props';
import { TeamPart } from '../common/team-part/TeamPart';

export class Referal extends React.Component<IReferalProps> {
	public render() {
		return (
			<div className='landing landing--referal'>
                   
                    <div className="referal">
                        <div className="big-back"></div>
                        <div className="title referal__title">
                            <h2 className="title__main-title">Реферальна Програма</h2>
                            <p className="title__subtitle">УСІ ВІДСОТКИ ЗА ЗАПРОШЕННЯ РЕФЕРАЛІВ НАРАХОВУЮТСЯ ВІДПОВІДНО ДО ЇХ КОЖНОЇ: </p>
                        </div>
                        <table className="referal__table">
                            <tbody>
                                <tr className="referal__table-head">
                                    <th className="referal__table-head-cell">ІНВЕСТИЦІЇ</th>
                                    <th className="referal__table-head-cell">ПОКУПКИ УСТАНОВОК</th>
                                    <th className="referal__table-head-cell">ПРИБУТКУ</th>
                                </tr>
                                <tr className="referal__table-row" >
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                    <td className="referal__table-body-cell"> 
                                        Перші <span>10</span> особисто запрошених <span>2%</span> 
                                    </td>
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                </tr>
                                <tr className="referal__table-row">
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                    <td className="referal__table-body-cell"> 
                                        Перші <span>10</span> особисто запрошених <span>2%</span> 
                                    </td>
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                </tr>
                                <tr className="referal__table-row">
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                    <td className="referal__table-body-cell"> 
                                        Перші <span>10</span> особисто запрошених <span>2%</span> 
                                    </td>
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                </tr>
                                <tr className="referal__table-row">
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                    <td className="referal__table-body-cell"> 
                                        Перші <span>10</span> особисто запрошених <span>2%</span> 
                                    </td>
                                    <td className="referal__table-body-cell">
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                        <span className="referal__star"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <TeamPart />
                    
        
			</div>
		)
	}
}