import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { IQuestionsProps } from './Props';
import { TeamPart } from '../common/team-part/TeamPart';
import { Question } from './question/Question';

export class Questions extends React.Component<IQuestionsProps> {
	public render() {
		return (
			<div className='landing landing--referal'>
                    <div className="questions">
                        <div className="title questions__title">
                            <h2 className="title__main-title">Питання та відповіді</h2>
                        </div>
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                        <Question />
                    </div>

                  
                    <TeamPart />
                   
			</div>
		)
	}
}