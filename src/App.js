import React, { Component } from 'react';
import Main from './Main';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="header">
					<h1 className="heading-one">Your quote for today</h1>
				</header>
				<Main />
				<footer className="footer">
					<p className="copyright">Written and coded by <a href="https://mywebgraphicdesign.com" target="_blank" rel="noopener noreferrer">Anna Szalkiewicz</a>.</p>
				</footer>
			</div>
		);
	}
}

export default App;
