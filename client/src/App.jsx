import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllBirds from './components/AllBirds';
import Birds from './components/Birds';
import NewBird from './components/NewBird';
import EditBird from './components/EditBird';
import OneBird from './components/OneBird';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element ={<Navigate to='/birds' />} />
          <Route path='/birds' element={<Birds />}>
              <Route index element={<AllBirds />} />
              <Route path='new' element={<NewBird />} />
              <Route path=':id/edit' element={<EditBird />} />
              <Route path=':id' element={<OneBird /> } />
            </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App