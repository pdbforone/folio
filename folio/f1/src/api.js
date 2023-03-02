const baseUrl = 'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js';

export function fetchAvailableTimes(date) {
  return fetch(`${baseUrl}/times/${date}`)
    .then(response => response.json())
    .then(data => data.availableTimes)
    .catch(error => console.error(error));
}

export function submitFormData(formData) {
  return fetch(`${baseUrl}/bookings`, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.ok)
    .catch(error => console.error(error));
}
