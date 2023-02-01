import React from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Birds() {
  const [birds, setBirds] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:5001/api/bird", { signal: controller.signal })
      .then((res) => {
        setBirds(res.data);
        setFlag(!flag);
      })
      .catch((err) => console.log(err));
    return () => controller.abort;
  }, [flag]);

  return (
    <div>
      <Outlet context={{ birds, setFlag, flag }} />
    </div>
  );
}

export default Birds;
