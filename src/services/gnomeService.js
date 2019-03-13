const URL =
  "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

const createPromise = () => fetch(URL).then(response => response.json());

export { createPromise };
