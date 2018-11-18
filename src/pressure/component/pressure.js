import React, { Component } from 'react';
import './graph.scss'
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  LineSeries
} from 'react-vis';

function Pressure (props) {

	const high = props.data.map((item) => {
		return {x: item.date, y: item.high}
	})
	const low = props.data.map((item) => {
		return {x: item.date, y: item.low}
	})
	return(
		<div>
			<h2 className="Graphtitle">High Pressure</h2>
			<FlexibleXYPlot height={200} xType="ordinal">
				<VerticalGridLines style={{stroke: '#ffffff30'}}/>
	  			<HorizontalGridLines style={{stroke: '#ffffff30'}}/>
				<XAxis title="Presurre" />
				<YAxis title="Date" />
				<LineSeries data={high} stroke="white" strokeWidth="3" curve={'curveStepBefore'}/>
			</FlexibleXYPlot>
			<h2 className="Graphtitle">Low Pressure</h2>
			<FlexibleXYPlot height={200} xType="ordinal">
				<VerticalGridLines style={{stroke: '#ffffff30'}}/>
	  			<HorizontalGridLines style={{stroke: '#ffffff30'}}/>
				<XAxis title="Presurre" />
				<YAxis title="Date" />
				<LineSeries data={low} strokeWidth="2" stroke="white" curve={'curveStepBefore'}/>
			</FlexibleXYPlot>
		</div>
	)
}

export default Pressure;