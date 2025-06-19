"use client";
import axios from "axios";
import React, { useState } from "react";

const apiUrl = "http://localhost:3001";

const PingPage = () => {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    const response = await axios.get(apiUrl + "/ping");
    setMessage(response.data.message);
  };

  return (
    <div>
      <button onClick={fetchMessage}>Fetch Message</button>
      <h1>{message}</h1>
    </div>
  );
};

export default PingPage;
