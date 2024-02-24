import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // corrected the import

import HomeComponent from '../Container/home'; // corrected the import
import AboutContainer from'../Container/about'
import IndexContainer from'../Container/contact'
import HomeContainer from '../Container/home'
import MovieContainer from'../Container/movies'
import SerachContainer from'../Container/search'
import TvSeriesContainer from'../Container/tvseries'
import DetailContainer from'../Container/details'

import FooterComponent from'../Components/Footer'
import HeaderComponent from'../Components/Header'
const RouterComponent = () => {
  return (
    <BrowserRouter>
    <HeaderComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/contact" element={<IndexContainer />} />
        <Route path="/home" element={<HomeContainer />} />
        <Route path="/movies" element={<MovieContainer />} />
        <Route path="/search" element={<SerachContainer />} />
        <Route path="/tvseries" element={<TvSeriesContainer />} />
        <Route path="/details/:movieid/:mediatype" element={<DetailContainer/>}></Route>

  
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  );
};

export default RouterComponent;
