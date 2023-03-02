function seededRandom(seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
}

export function fetchAPI(date) {
  return new Promise((resolve, reject) => {
    let result = [];
    let random = seededRandom(new Date(date).getDate());

    for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
        result.push(i + ':00');
      }
      if(random() < 0.5) {
        result.push(i + ':30');
      }
    }
    resolve(result);
  });
}


export function submitAPI(formData) {
  return new Promise((resolve, reject) => {
    // submit data to API and resolve with boolean value indicating success or failure
    resolve(true);
  });
}

const API = {
  fetchAPI,
  submitAPI,
};

export default API;
