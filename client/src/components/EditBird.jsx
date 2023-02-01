import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

function EditBird() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { flag, setFlag } = useOutletContext();
  const [formBird, setFormBird] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/bird/${id}`, {
        signal: controller.signal,
      })
      .then((res) => setFormBird(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/api/bird/${id}`, formBird)
      .then((res) => {
        console.log(res.data);
        setFlag(!flag);
        setErrors(null)
        navigate(`/birds/${id}`);
      })
      .catch((err) => {
        console.log(err)
        setErrors(err?.response?.data?.errors)
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormBird({
      ...formBird,
      [name]: value,
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card mb-3 mt-3 w-50">
        <div className="card-body">
          <h5 className="card-title">Edit a Sighting</h5>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={formBird.name}
                onChange={handleChange}
              />
              {errors?.name && (
                <span className="form-text text-danger">
                {errors.name.message}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="zip" className="form-label">
                Zip Digit Code:
              </label>
              <input
                type="number"
                name="zip"
                id="zip"
                className="form-control"
                value={formBird.zip}
                onChange={handleChange}
              />
                {errors?.zip && (
                <span className="form-text text-danger">
                {errors.zip.message}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="color" className="form-label">
                Primary Color:
              </label>
              <input
                type="text"
                name="color"
                id="color"
                className="form-control"
                value={formBird.color}
                onChange={handleChange}
              />
                {errors?.color && (
                <span className="form-text text-danger">
                {errors.color.message}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Bird Image (URL):
              </label>
              <input
                type="text"
                name="image"
                id="image"
                className="form-control"
                value={formBird.image}
                onChange={handleChange}
              />
                {errors?.image && (
                <span className="form-text text-danger">
                {errors.image.message}
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="activity" className="form-label">
                Select Activity:
              </label>
              <select
                name="activity"
                id="activity"
                className="form-select"
                value={formBird.activity}
                onChange={handleChange}
              >
                <option value="none">Select Activity</option>
                <option value="At A Feeder">At A Feeder</option>
                <option value="In a Tree or Bush">In a Tree or Bush</option>
                <option value="On The Ground">On The Ground</option>
                <option value="Flying">Flying</option>
                <option value="Swimming">Swimming</option>
                <option value="On a Fence or Wire">On a Fence or Wire</option>
              </select>
            </div>
            <div className="mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Date Seen:
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="form-control"
                      value={formBird.date}
                      onChange={handleChange}
                    />
                      {errors?.date && (
                      <span className="form-text text-danger">
                      {errors.date.message}
                </span>
              )}
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditBird;
