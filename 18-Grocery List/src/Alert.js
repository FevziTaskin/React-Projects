import React, { useEffect } from "react";

const Alert = ({ type, msg, adjustAlert, list }) => {
  /* list prop added to dependency array so that all alerts last 3 seconds 
  in case of consecutive transaction operations are done which require invoking adjsutAlert function */
  useEffect(() => {
    const timeout = setTimeout(() => {
      adjustAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
