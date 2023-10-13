import axios from 'axios';
import config from '../environment/config';
import {CardType} from '../types';

const api = axios.create({baseURL: config.apiUrl});

export const postCard = (data: CardType) => api.post('/cards', data);

export const getCards = () => api.get<CardType[]>('/cards');
