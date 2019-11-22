const DEFAULT_ERROR_MESSAGE = 'Your request could not be processed. Please try again later';

const request = (options) => {
  const { url, method } = options;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // xhr.withCredentials = true;
    // xhr.setRequestHeader('x-rapidapi-host', 'SwapistefanskliarovV1.p.rapidapi.com');
    // xhr.setRequestHeader('x-rapidapi-key', 'd8c1d233f3mshd9fb14a3dccf9dep14d383jsn1f299671292f');
    // xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.open(method, url);
    xhr.onload = () => {
      const response = { code: xhr.status, data: JSON.parse(xhr.response) };
      console.log('resolved: ', response);
      resolve(response);
    };
    xhr.onerror = () => {
      const response = {
        code: xhr.status,
        data: xhr.statusText || DEFAULT_ERROR_MESSAGE
      };
      console.log('rejected: ', response);
      reject(response);
    };
    xhr.send();
  });
};

export const getResource = (url) => {
  const options = {
    url,
    method: 'GET'
  };
  return request(options);
};

export const postResource = (url) => {
  const options = {
    url,
    method: 'POST'
  };
  return request(options);
};
