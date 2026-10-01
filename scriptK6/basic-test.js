import http from 'k6/http';
import { check,sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp-up to 20 users over 30 seconds
    { duration: '1m', target: 150 },  // Stay at 150 users for 1 minute
    { duration: '1m', target: 150 },   // Ramp-down to 150 users over 1 minute
    { duration: '30s', target: 30 },   // Ramp-down to 30 users over 30 seconds
    { duration: '10s', target: 100 },    // Ramp-down to 100 users over 10 seconds
    { duration: '5s', target: 10 },     // Ramp-down to 10 users over 5 seconds
  ],
};

export default function () {
  const response = http.get('https://www.saucedemo.com/');

  check(response, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(2);
}