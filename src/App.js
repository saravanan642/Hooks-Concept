import React from 'react'
import { RoutePages } from './RoutePages'
import { Header } from './components/Layout.js/Header'
import { Footer } from './components/Layout.js/Footer'
import Increment from './components/publicpages/Increment'
import Sample from './UseState/Sample'



export const App = () => {
  return (
    <div>
      <Header />
       <RoutePages />
       <Footer/>
       <Increment/>
       <Sample />
    </div>
  )
}
