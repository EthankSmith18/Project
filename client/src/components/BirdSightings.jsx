import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function BirdSightings() {
  const [sightings, setSightings] = useState(null);
  const [state, setState] = useState(null);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   axios
  //     .get(`https://api.ebird.org/v2/data/obs/US-AZ/recent`, { headers: {'x-ebirdapitoken': `ime55fp6m5c6`} }, {
  //       signal: controller.signal,
  //     })
  //     .then((res) => setSightings(res.data))
  //     .catch((err) => console.log(err));
  //   return () => controller.abort();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const controller = new AbortController();

    axios
    .get(`https://api.ebird.org/v2/data/obs/US-${state}/recent`, { headers: {'x-ebirdapitoken': `ime55fp6m5c6`} }, {
      signal: controller.signal,
    })
      .then((res) => {
        console.log(res.data);
        setSightings(res.data);
      })
      .catch((err) => {
        console.log(err)
      });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setState(value);
    };


  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className="card mb-3 mt-3 w-50">
          <div className="card-body">
            <h5 className="card-title">View Recent Sightings by State</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="activity" className="form-label">
                  Select State:
                </label>
                <select
                  name="activity"
                  id="activity"
                  className="form-select"
                  onChange={handleChange}
                >
                  <option value="none">Select State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washinton</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      
      <div className="d-flex justify-content-center">
        <div className="card mt-3 w-75">
          <div className="card-body table-responsive">
            <table className="table table-striped table-hover table-light table-bordered align-middle">
              <thead>
                <tr>
                  <th>Common Name:</th>
                  <th>Scientific Name:</th>
                  <th>Number Seen:</th>
                  <th>Date and Time:</th>
                  <th>Location:</th>
                </tr>
              </thead>
              <tbody className='justify-content-center'>
                {
                  sightings && sightings.map(sighting => {
                    return(
                      <tr key={sighting._id}>
                        <td>{sighting.comName}</td>
                        <td>{sighting.sciName}</td>
                        <td>{sighting.howMany}</td>
                        <td>{sighting.obsDt}</td>
                        <td>{sighting.locName}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default BirdSightings