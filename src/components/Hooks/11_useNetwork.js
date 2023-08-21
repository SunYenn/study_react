import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HookUseNetwork() {

  const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine)
    const handleChange = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setStatus(navigator.onLine);
    }

    useEffect(() => {
      window.addEventListener("online" , handleChange);
      window.addEventListener("offline" , handleChange);
      return () => {
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
      };
    }, [])
    return status
  }

  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "we are offline")
  }
  const onLine = useNetwork(handleNetworkChange)

  return (
    <div className="App">
      <div className="App-header">
        <h1>{onLine ? "Online" : "Offline"}</h1>
      </div>
    </div>
  )
}

export default HookUseNetwork;
