import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

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
			<div className={styles.container}>
				<img src={'https://i.ibb.co/7QpKsCX/image.png'} alt='covid-19' />
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
