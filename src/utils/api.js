import { CONFIG } from '../config';
import { demoApi } from './demoApi';

class Api {
  constructor({ baseUrl, headers, mode, customFetch }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._mode = mode;
    this._customFetch = customFetch;
  }

  setToken(token) {
    this._headers.authorization = `Bearer ${token}`;
  }

  getInitialCards() {
    const url = `${this._baseUrl}/cards`;
    const params = {
      headers: { authorization: this._headers.authorization },
    };
    return this._makeRequest(url, params);
  }

  addCard({ place, link }) {
    const url = `${this._baseUrl}/cards`;
    const params = {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name: place, link })
    };
    return this._makeRequest(url, params);
  }

  deleteCard(cardId) {
    const url = `${this._baseUrl}/cards/${cardId}`;
    const params = {
      method: 'DELETE',
      headers: this._headers,
    };
    return this._makeRequest(url, params);
  }

  likeCard(cardId, set) {
    const url = `${this._baseUrl}/cards/${cardId}/likes`;
    const params = {
      method: set ? 'DELETE' : 'PUT',
      headers: this._headers,
    };
    return this._makeRequest(url, params);
  }

  getUserInfo() {
    const url = `${this._baseUrl}/users/me`;
    const params = {
      headers: { authorization: this._headers.authorization }
    };
    return this._makeRequest(url, params);
  }

  setUserInfo({ name, about }) {
    const url = `${this._baseUrl}/users/me`;
    const params = {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about })
    };
    return this._makeRequest(url, params);
  }

  setAvatar(avatar) {
    const url = `${this._baseUrl}/users/me/avatar`;
    const params = {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    };
    return this._makeRequest(url, params);
  }

  _makeRequest(url, params) {
    return this._mode === 'demo' ?
      this._customFetch(url, params)
      : fetch(url, params)
        .then(response => response.ok ? response.json() : Promise.reject({ errorCode: response.status, errorText: response.statusText }));
  }
}

const realApi = new Api({
  baseUrl: CONFIG.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  },
});

export const api = CONFIG.mode === 'demo' ? demoApi : realApi;
