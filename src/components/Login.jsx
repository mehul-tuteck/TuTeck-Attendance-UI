import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, TextField, Button, MuiAlert } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [message, setMessage] = useState("");
  const [ph, setPh] = useState("");
  const [err, setErr] = useState("");
  const [ip, setIp] = useState("");
  const nav = useNavigate();

  //   const setPhoneNumber = (e) => {
  //     setPh(e.target.value);
  //     console.log(ph);
  //   };

  function getIpaddress() {
    fetch("https://jsonip.com/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIp(data.ip);
        console.log(data)
      })
      .catch((err) => {
        console.log(`There was an error ${err}`);
      });
  }

  useEffect(() => {
    getIpaddress();
  }, []);

  const login = () => {
    axios
      .post("http://localhost:5000/api/login", { phone: ph })
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("token", `Bearer ${response.data.token}`);
          nav("/scanner");
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.message);
        setErr(error.response.data.message);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          value={ph}
          onChange={(e) => setPh(e.target.value)}
        />

        <Button variant="contained" onClick={login}>
          Login
        </Button>
      </Stack>
      <div>{ip}</div>
    </div>
  );
};

export default Login;
