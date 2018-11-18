import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './date.scss';

class Date extends Component {
	render(){
		return(
			<div className="back">
				<h3 className="date">{this.props.date}</h3>
				<p className="textWeather">{this.props.text}</p>
			</div>
		)
	}
}

export default Date;