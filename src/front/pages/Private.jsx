import React, { useEffect, useState } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Private = () => {

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) window.location.href = "/login";
    else setAuthorized(true);
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Welcome to the private page</h1>
    </div>
  );
}; 