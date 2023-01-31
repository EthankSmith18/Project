import React from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Birds() {

  return (
    <div>
      <h1>Birds</h1>
      <Outlet />
    </div>
  );
}

export default Birds;
