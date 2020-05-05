import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import cx from 'classnames';

import { fetchData } from './api';

class App extends React.Component {
	state = {
		data: {},
		country: '',
	};
	async componentDidMount() {
		const fetchedData = await fetchData();
		// console.log(fetchedData);
		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		// console.log(country);
		const fetchedData = await fetchData(country);
		this.setState({ data: fetchedData, country: country });
		console.log(fetchedData);
	};

	render() {
		const { data, country } = this.state;

		return (
			<div className={cx(styles.container, styles.img)}>
				<img className={styles.image} src={'https://i.ibb.co/7QpKsCX/image.png'} alt='covid-19' />
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
