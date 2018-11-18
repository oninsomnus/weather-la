import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Date from './date.js';

function Forecast (props) {
	return(
		
		<div className="panel">
			{
				props.climainfo.map((item) => {
					return (
						<Date date={item.date} {...item} key={item.id} />
					)
				})
			}
		</div>
	)
}

export default Forecast;