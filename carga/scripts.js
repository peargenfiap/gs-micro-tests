import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 100,
  duration: '5m',
};
export default function () {
  http.get('http://localhost:8080/v1/objetivos/');
  sleep(1);
}