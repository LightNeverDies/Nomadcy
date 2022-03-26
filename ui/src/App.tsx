import React from 'react'
import Main from './pages/Main/Main'
import NotFound from './pages/NotFound/NotFound'
import { Routes, Route } from 'react-router-dom'

class App extends React.Component <any, any> {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Main type={'apple'}/>} />
          <Route path='/google' element={<Main type={'google'}/>}/>
          <Route path='/apple' element={<Main type={'apple'}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    )
  }
}

export default App