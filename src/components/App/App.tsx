import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from '../Header/Header';
import BannerInfo from '../Banners/BannerInfo/BannerInfo';
import CharList from '../Characters/CharList/CharList';
import CharInfo from '../Characters/CharInfo/CharInfo';
import ComicsList from '../Comics/ComicsList/ComicsList';

class App extends Component {


  render() {
    return (
      <Router>
        <div className='flex justify-center'>
          <div className="app container flex justify-center min-h-screen font-roboto-condensed">
            <div className="w-custom-1100px">
              <Header />
              <Routes>
                <Route
                  path='/'
                  element={
                    <>
                      <BannerInfo />
                      <div className="characters flex justify-between items-start">
                        <CharList />
                        <CharInfo />
                      </div>
                    </>
                  }
                />
                <Route path="/comics" element={<ComicsList />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}


export default App;