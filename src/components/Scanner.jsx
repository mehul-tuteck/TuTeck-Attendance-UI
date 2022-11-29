import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";

const Scanner = () => {
  const [ip, setIp] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [dataQR, setDataQR] = useState("");

  function getIpaddress() {
    fetch("https://jsonip.com/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIp(data.ip);
        //navigate to confirmation
      })
      .catch((err) => {
        console.log(`There was an error ${err}`);
      });
  }

  useEffect(() => {
    getIpaddress();
  }, []);

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setDataQR(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      <p>{dataQR}</p>
    </>
  );
};

export default Scanner;
