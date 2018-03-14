import { Field } from '../../components/field/Field';
import { Switch } from '../../components/switch/Switch';




export class Uikit extends React.Component {

	/**
	 * Renders uikit section
	 */
	public Section = ({ name, children }) => {
		return (
			<div className='uikit-section' >
				<div className='uikit-section__name' >{name}</div>
				<div>
					{children}
				</div>
			</div>
		)
	}

	/**
	 * Test values
	 */
	public state = {
		email: '',
		password: '',
		callMeWhenYouWillBeReady: false,
		deleteTrash: true
	};
	/**
	 * State setter
	 */
	public onChange = ({name, value}) => this.setState({[name]: value});
	/**
	 * Renders uikit 
	 */
	public render() {
		const { Section, onChange } = this;
		const {email, password, callMeWhenYouWillBeReady, deleteTrash} = this.state;
		return (
			<div>
				<Section name='Field' >
					<Field label='Email'  onChange={onChange} name='email' value={email} />
					<Field label='Password'  onChange={onChange} type='password' name='password' value={password} />
				</Section>				

				<Section name='Switch' >
					<Switch onChange={onChange} name='callMeWhenYouWillBeReady' label='Call me when you will be ready' value={callMeWhenYouWillBeReady} />
					<Switch onChange={onChange} name='deleteTrash' label='Delete trash' value={deleteTrash} />
				</Section>	
			</div>
		);
	}
}