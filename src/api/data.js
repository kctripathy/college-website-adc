export const loadJsonData = (fileName) => {
  let url = `../data/${fileName}.json`;
  return (
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      // .then(data => {
      //     return data
      // })
      .catch((err) => {
        return err;
      })
  );
};
