import React from "react";


function dataStorage(itemName, initialValue) {
  const [data, setData] = React.useState(initialValue);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);


  const saveItem = (item) => {};
}

const initialValue = [{
  "pelotas": "pe lo tas",
}];


export { dataStorage };