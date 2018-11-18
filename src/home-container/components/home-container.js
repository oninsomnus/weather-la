import React, { Component } from 'react';
import Forecast from '../../date/component/forecast'
import Pressure from '../../pressure/component/pressure.js';
import './header.scss'


class HomeContainer extends Component {
	render(){
	const forecast = this.props.data.query.results.channel.item.forecast;
		return(
			<div>
			<h1 className="header">Los Angeles Weather</h1>
			<Forecast climainfo={forecast} key={forecast.id} />
			<Pressure data={forecast}/>
			</div>

		)
	}
}

export default HomeContainer;