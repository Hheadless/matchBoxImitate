import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from './route';
import RouterView from './RouterView';

export default class RouterConfig extends React.Component {
	constructor(props: Readonly<{}>) {
		super(props);
	}
	render() {
		return (
			<BrowserRouter history={this.props.history}>
				<RouterView routes={routes} />
			</BrowserRouter>
		);
	}
}
