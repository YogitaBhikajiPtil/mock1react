import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
           <Navbar/>
        </BrowserRouter>
    </Provider>
  )
}

export default App