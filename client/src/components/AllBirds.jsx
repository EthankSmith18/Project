import React from 'react'
import {useOutletContext, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AllBirds() {
  const  {birds}  = useOutletContext();
  const navigate = useNavigate();
  
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/bird/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate('/birds/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='container'>
      <div className="d-flex justify-content-center">
        <div className="card mt-3 w-50">
          {birds &&  birds.map(bird => {
            return(
            <div className="container d-flex justify-content-center" key={bird._id}>
              <>
              <img src={bird.image} className=".img-thumbnail w-25 mt-3 mb-3" alt={bird.name}></img>
                <div className="card-body">
                <Link to={`/birds/${bird._id}`}><p className="card-text">Species: {bird.name}</p></Link>
                  <p className="card-text">Sighted On: {bird.date}</p>
                </div>
              </>
            </div>
            )}
          )}
          </div>
      </div>
    </div>
  )
}

export default AllBirds