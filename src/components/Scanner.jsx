import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import logo from "../../src/logo.png"

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
  <header>
      <img alt="logo" src={logo}></img>
    </header>
      <main>
        <div className="scanerWraper">
          <p>Hold camera over the QR Code on item</p>

          <div className="AppCon">
            <div className="container">
              <div className="camera-film film-left"></div>
              <div className="camera-film film-right"></div>
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
            </div>
          </div>
        </div>
      </main>

      <p>{dataQR}</p>
    </>
  );
};

export default Scanner;
