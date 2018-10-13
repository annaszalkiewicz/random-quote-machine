import React, { Component } from 'react';
import Main from './Main';

class App extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			colors: ['#711717', '#155f60', '#6c943e', '#1e7f3f'],
			randomColor: ''
		}
		this.updateColor = this.updateColor.bind(this);
	}

	componentDidMount = () => {

		this.updateColor();

	}

	updateColor = () => {

		const { colors } = this.state;
		const random = Math.floor(Math.random() * colors.length);
		const color = colors[random];

		this.setState({ randomColor: color });

	}
	
	render() {

		const { randomColor } = this.state;

		return (
			<div className="App" style={{background: randomColor}}>
				<header className="header">
					<h1 className="heading-one">Your quote for today</h1>
				</header>
				<Main 
					updateColor={this.updateColor}
					randomColor={randomColor}
				/>
				<footer className="footer">
					<p className="copyright">Written and coded by <a href="https://mywebgraphicdesign.com" target="_blank" rel="noopener noreferrer">Anna Szalkiewicz</a>.</p>
				</footer>
			</div>
		);
	}
}

export default App;
