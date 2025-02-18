import React, { useEffect, useState } from 'react';

export const Private = () => {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await fetch("http://localhost:3001/private", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          setAuthorized(true);
        } else {
          sessionStorage.removeItem("token");
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        sessionStorage.removeItem("token");
        window.location.href = "/login";
      }
    };

    verifyToken();
  }, []);


  return (
    <div className="text-center mt-5">
      <h1>Welcome to the private page</h1>
    </div>
  );
};
