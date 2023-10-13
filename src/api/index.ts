import axios from 'axios';
import config from '../environment/config';

export const api = axios.create({baseURL: config.apiUrl});
