import React from "react";


function dataStorage(itemName, initialValue) {
  const [data, setData] = React.useState(initialValue);

  React.useEffect(() => {
    const localStorageData = localStorage.getItem(itemName);
    let parsedItem;
    if (!localStorageData) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageData);
    }
    setData(parsedItem);
  }, []);

  const addEntry = (silabas) => {
    const keyName = silabas.join("").toLowerCase();
    setData({
      ...data,
      [keyName]: silabas.join(" ")
    });
    localStorage.setItem(itemName, JSON.stringify(data));
  };

  return {
    data,
    addEntry,
  }
}



export { dataStorage };