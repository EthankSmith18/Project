import React from 'react'
import "./slate.css";
import NavBar from './components/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllBirds from './components/AllBirds';
import Birds from './components/Birds';
import NewBird from './components/NewBird';
import EditBird from './components/EditBird';
import OneBird from './components/OneBird';
import BirdSightings from './components/BirdSightings';
import Grid from './components/Grid';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element ={<Navigate to='/birds' />} />
          <Route path='sighting' element={<BirdSightings />} />
          <Route path='/birds' element={<Birds />}>
              <Route index element={<AllBirds />} />
              <Route path='new' element={<NewBird />} />
              <Route path=':id/edit' element={<EditBird />} />
              <Route path=':id' element={<OneBird /> } />
              <Route path='grid' element={<Grid /> } />
            </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App