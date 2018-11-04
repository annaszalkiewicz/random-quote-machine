import React, { Component } from 'react';
import Main from './Main';
import Referral from './Referral';

class App extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			colors: ['#711717', '#155f60', '#6c943e', '#1e7f3f'],
			randomColor: '',
			images: [],
			randomImage: '',
			author: '',
			link: '',
			error: false
		}
		this.updateColor = this.updateColor.bind(this);
		this.fetchImages = this.fetchImages.bind(this);
	}

	componentDidMount = () => {

		this.updateColor();
		this.fetchImages();

	}

	updateColor = () => {

		const { colors } = this.state;
		const random = Math.floor(Math.random() * colors.length);
		const color = colors[random];

		this.setState({ randomColor: color });

	}

	fetchImages = () => {

		let tag = 'nature';

			fetch(`https://api.unsplash.com/photos/random?query=${tag}&orientation=landscape`, {
        headers: {
            Authorization: 'Client-ID 0cf967e9a4b6704211470385b4e1678bef77ab4f36e25d48dc43708eb6715be8'
        }
    }).then(response => response.json())
        .then( (data) => {
					this.setState({ randomImage: data.urls.raw })
					this.setState({ author: data.user.name })
					this.setState({ link: data.user.links.html })
				})
        .catch( () => {
					this.setState({ error: true })
				});

	}
	
	render() {

		const { randomImage, randomColor, author, link, error } = this.state;

		return (
			<div className="App" style={{backgroundImage: `url(${randomImage})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundColor: randomColor, }}>
				<header className="header">
					<h1 className="heading-one">Your quote for today</h1>
				</header>
				<Main 
					updateColor={this.updateColor}
					randomColor={randomColor}
					fetchImages={this.fetchImages}
					error={error}
				/>
				<footer className="footer">
					<p className="copyright">Written and coded by <a href="https://mywebgraphicdesign.com" target="_blank" rel="noopener noreferrer">Anna Szalkiewicz</a>.</p>
					<Referral 
					author={author}
					link={link}
					/>
				</footer>
			</div>
		);
	}
}

export default App;
