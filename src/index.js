import React from 'react';
import { render } from 'react-dom';
import data from './api.json';
import HomeContainer from './home-container/components/home-container'
import './style.scss'


const homeContainer = document.querySelector('#home-container');


render (<HomeContainer data={data} />, homeContainer);