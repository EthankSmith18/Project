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
    <div className="d-flex justify-content-center">
      {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner w-50">
      {
        birds && birds.map(bird => {
        return(
          <div key={bird._id} className="carousel-item active">
            <img  src={bird.image} className="d-block w-100" alt={bird.name} height="50%"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>{bird.name}</h5>
            </div>
          </div>
        )
        })
      }
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div> */}
      {/* <div className="card mt-3 w-75">
        <div className="card-body table-responsive">
          <table className="table table-striped table-hover table-light table-bordered align-middle">
            <thead>
              <tr>
                <th>Species</th>
                <th>Date</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody className='justify-content-center'>
              {
                birds && birds.map(bird => {
                  return(
                    <tr key={bird._id}>
                      <td><Link to={`/birds/${bird._id}`}>{bird.name}</Link></td>
                      <td>{bird.date}</td>
                      <td>{bird.zip}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div> */}
      <div className="card mt-3 w-50">
        {birds &&  birds.map(bird => {
          return(
          <div className="container d-flex justify-content-center">
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
    
  )
}

export default AllBirds