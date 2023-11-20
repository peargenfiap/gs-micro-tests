import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 5000,
  duration: '180s',
};
export default function () {
  http.get('http://localhost:8080/v1/objetivos/');
  sleep(1);
}