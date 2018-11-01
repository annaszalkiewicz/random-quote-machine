import React, { Component } from 'react';
import Main from './Main';

class App extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			colors: ['#711717', '#155f60', '#6c943e', '#1e7f3f'],
			randomColor: '',
			images: [],
			randomImage: ''
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

		const key = '060c74d545a11b19611116873f118dba';
		let tag = 'landscape';

		fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&text=${tag}&sort=interestingness-desc&content-type=1&extras=url_o&per_page=50&page=1&format=json&nojsoncallback=1`)
			.then(response => response.json())
			.then((j) => {

				let pics = j.photos.photo.map((pic) => {

					let url = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
					return (
						url
					)
				})

				this.setState({ images: pics });
				this.setState({ randomImage: this.state.images[Math.floor(Math.random() * this.state.images.length)]})

			})
			.catch((error) => {

				this.setState({ error: true })

			});

	}
	
	render() {

		const { randomImage, randomColor } = this.state;

		return (
			<div className="App" style={{backgroundImage: `url(${randomImage})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center", transition: "all 2s ease"}}>
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
