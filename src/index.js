import React from 'react'
import ReactDOM from 'react-dom'
import './components/index.css';

import Header from './components/Header'
import SwiperBanner from './components/SwiperBanner'
import PokeList from './components/PokeList'
import GridGroup from './components/GridGroup'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SwiperBanner />
    <PokeList />
    <GridGroup />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
