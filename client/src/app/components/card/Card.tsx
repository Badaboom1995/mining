import * as classNames from 'classnames';



export const Card = ({ children, className = '', ...props }) => (
	<div {...props} className={`card-block ${className} `} >
		{children}
	</div>
);