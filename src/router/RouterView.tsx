import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import routes from './route'

export default class RouterView extends React.Component {
	render() {
		return (
			<BrowserRouter>

				<Switch>
					{
						routes.map((v, k) => {
							return v.children ? <Route key={k} path={v.path} render={props => {

							}}/> : <Route/>
						})
					}
				</Switch>
			</BrowserRouter>
		)
	}
}
