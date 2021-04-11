// const axios = require('axios');
import {
  getItem
} from './helper';

export const POST = async (url, params, authToken) => {
  let configURL = `http://localhost:3000${url}`;
  try {
    let authorization = authToken ? authToken : '';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authorization,
    }
    const response = await fetch(configURL, {
      method: `POST`,
      headers,
      body: JSON.stringify(params),
    });
    if (response.status >= 200 && response.status < 300) {
      return await response.json();
    } else {
      throw new Error(`${response.status}`)
    }
  }
  catch (error) {
    throw error;
  }
}

export const GET = async (url, params/* , udid, token */) => {
  let configURL = `http://localhost:3000${url}?${params || ""}`;
  try {
      let authorization = await getItem('token');
      
      const headers = {
          'Accept': 'application/json',
          'Authorization': authorization,
      }
      const response = await fetch(configURL, {
          method: `GET`,
          headers
      });
      // console.log("GET_REQUEST", response.status, response)
      if (response.status >= 200 && response.status < 300) {
          return await response.json();
      } else {
          throw new Error(`${response.status}`)
      }
  }
  catch (error) {
      throw error;
  }
}

export const PUT = async (url, params) => {
  let configURL = `http://localhost:3000${url}`;
  try {
    // const resp = axios.post()
    // let authorization = await getItem('token') || '';
    let authorization = await getItem('token');
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authorization,
      // 'visitorId': visitorId,
    }
    // console.log('put params->', params);
    const response = await fetch(configURL, {
      method: `PUT`,
      headers,
      body: JSON.stringify(params),
    });
    // console.log("PUT_REQUEST", response, JSON.stringify(params))
    if (response.status >= 200 && response.status < 300) {
      return await response.json();
    } else {
      throw new Error(`${response.status}`)
    }
  }
  catch (error) {
    throw error;
  }
}

export const DELETE = async (url, params) => {
  let configURL = `http://localhost:3000${url}`;
  try {
    // const resp = axios.post()
    // let authorization = await getItem('token') || '';
    let authorization = await getItem('token');
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authorization,
      // 'visitorId': visitorId,
    }
    // console.log('delete params->', params);
    const response = await fetch(configURL, {
      method: `DELETE`,
      headers,
      body: JSON.stringify(params),
    });
    // console.log("DELETE_REQUEST", response, JSON.stringify(params))
    if (response.status >= 200 && response.status < 300) {
      return await response.json();
    } else {
      throw new Error(`${response.status}`)
    }
  }
  catch (error) {
    throw error;
  }
}