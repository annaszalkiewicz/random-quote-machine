# Your Quote for Today - Random Quote Machine
---
## Project Overview

This project is part of Front-end Libraries Certification by FreeCodeCamp. It's single page application that features random quote using API. 

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## How to run project?

### Run on local machine

1. Clone repository to local machine using
```
$ git clone https://github.com/annaszalkiewicz/random-quote-machine
```

2. Install all dependencies
```
$ npm install
```
3. Run application
```
$ npm start
```
visit the site: `http://localhost:3000`
You can change port by editing `package.json` file. In line 19 `"start": "react-scripts start",` add `set PORT=3000 && ` before `react-scripts start` and change port number 3000 to any other. Save file.

### Live preview

[https://mywebgraphicdesign.com/random-quote-machine](https://mywebgraphicdesign.com/random-quote-machine)

## Offline usage

This project use service workers and cache its content. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like /static/js/main.<hash>.js are served with the contents of the /static/js/main.<hash>.js file. Service worker runs only on production `build` directory. If you would like to test it on your local machine, please follow this guide: 

1. Make sure you have installed [Node](https://nodejs.org/).

2. Create `build` folder
```
$ npm run build
```

3. Install [Serve](https://github.com/zeit/serve).
```
$ npm install -g serve
```
4. Serve your static site on the port 5000. 
```
$ serve -s build
```
Like many of serve’s internal settings, the port can be adjusted using the `-p` or `--port` flags.

5. Open project on local server `localhost:5000`

## Dependencies

* [React](https://reactjs.org/)
* [React DOM](https://www.npmjs.com/package/react-dom)
* [Font Montserrat on Google](https://fonts.google.com/specimen/Montserrat)
* [Font Tangerine on Google](https://fonts.google.com/specimen/Tangerine)
* [FontAwesome](https://fontawesome.com/)
* [Normalize.css](https://necolas.github.io/normalize.css/)
* [Random Quotes API by Tadas Talaikis](https://talaikis.com/random_quotes_api/)
* [Unsplash API](https://unsplash.com/developers)

## Known Issues

1. **Fetching random quote doesn't work:** Random Quotes API by Tadas Talaikis has been removed by its author, so need to find new APi to fix it.

## Contributions

As this project is part of Front-End Libraries Certification no contribution will be accepted.