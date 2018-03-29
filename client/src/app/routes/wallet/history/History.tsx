import {  IHistoryProps } from "./Props";
import { observer, inject } from "mobx-react";




@inject('wallet')
@observer
export class History extends React.Component<IHistoryProps> {
	/**
	 * render
	 */
	public render() {
		return (
			<div>
				
			</div>
		);
	}
}