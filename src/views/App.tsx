import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'assets/styles/App.scss'
import Gate from 'src/views/gate/Gate'
import Message from 'src/views/message/Message'
// const Gate = () => import('src/views/gate/Gate')
// const Message = () => import('src/views/message/Message')

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Gate} />
				<Route exact path="/message" component={Message} />
			</Switch>
		</BrowserRouter>
		// <div className="App">
		//   <header>
		//     {/* <img src={logo} className="App-logo" alt="logo" /> */}
		//     <p>
		//       Edit <code>src/App.tsx</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
	)
}

export default App
