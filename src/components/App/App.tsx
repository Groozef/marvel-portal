import React, { Component } from 'react'
import Header from '../Header/Header';


class App extends Component {
  render() {
    return (
      <div className='flex justify-center'>
        <div className="app container flex justify-center h-screen font-roboto-condensed">
          <div className="w-custom-1100px">
            <Header/>
          </div>
        </div>
      </div>
    )
  }
}


export default App;