import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function OneBird() {
  const { id } = useParams();
  const [bird, setBird] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/bird/${id}`, {
        signal: controller.signal,
      })
      .then((res) => setBird(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/bird/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/birds/");
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="container">
      <div className="d-flex justify-content-center">
      
        <div className="card mt-3 w-50">
          {bird && (
            <div className="container">
              <>
                <img src={bird.image} className="card-img-top mt-3" alt={bird.name}></img>
                <div className="card-body">
                  <h5 className="card-title">Your {bird.name} Sighting</h5>
                  <p className="card-text">Name: {bird.name}</p>
                  <p className="card-text">Location: {bird.zip}</p>
                  <p className="card-text">Activity: {bird.activity}</p>
                  <p className="card-text">Color: {bird.color}</p>
                  <p className="card-text">Date Seen: {bird.date}</p>
                </div>
              </>
            </div>
          )}
          <div className="card-footer d-flex justify-content-end ">
            <Link
              className="btn btn-sm btn-warning me-2"
              to={`/birds/${id}/edit`}
            >
              Edit
            </Link>
            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(bird._id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneBird;
