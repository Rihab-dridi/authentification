import React, { useEffect } from "react";
import axios from "axios";
export default function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/all")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <img src="/images/home.png" alt="pic" />
    </div>
  );
}
