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
     <svg
        className="toppol animate__animated animate__fadeInDown"
        width="263"
        height="373"
        viewBox="0 0 263 373"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-167.764 125.756C-172.921 107.977 -167.94 88.9914 -154.846 76.5219L-36.3142 -36.3587C-24.0688 -48.0203 -6.56243 -52.2216 9.86855 -47.442L179.355 1.85969C195.786 6.63929 208.761 19.7073 213.583 36.3339L260.267 197.274C265.424 215.052 260.442 234.038 247.348 246.508L128.817 359.388C116.571 371.05 99.0649 375.251 82.634 370.472L-86.8521 321.17C-103.283 316.39 -116.258 303.322 -121.081 286.696L-167.764 125.756Z"
          fill="#1976D2"
          fillOpacity="0.06"
        />
      </svg>
       <svg
        className="botPol animate__animated animate__fadeInDown"
        width="315"
        height="410"
        viewBox="0 0 315 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.64963 190.068C-2.51291 173.428 2.06429 155.984 13.7498 143.954L139.108 14.8959C151.355 2.28764 169.53 -2.45039 186.601 2.51528L353.703 51.1236C370.774 56.0893 384.062 69.9796 388.424 87.4193L433.078 265.932C437.241 282.572 432.664 300.016 420.978 312.047L295.62 441.104C283.373 453.713 265.198 458.451 248.127 453.485L81.0248 404.877C63.9541 399.911 50.6666 386.021 46.3041 368.581L1.64963 190.068Z"
          fill="#1976D2"
          fillOpacity="0.06"
        />
      </svg>
      <main>
        <div className="scanerWraper">
          <p>Hold camera over the QR Code</p>

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
