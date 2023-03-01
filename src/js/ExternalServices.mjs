const baseURL = 'https://wdd330-backend.vercel.app/';
const loginURL = 'http://server-nodejs.cit.byui.edu:3000/login';
const ordersURL = 'http://server-nodejs.cit.byui.edu:3000/orders';
//const baseURL = 'http://server-nodejs.cit.byui.edu:3000/'
// const baseURL = 'https://wdd330-backend.onrender.com/';

async function convertToJson(res) {
  const jsonResponse = await res.json();
  if (res.ok) {
    return jsonResponse;
  } else {
    throw { name: 'servicesError', message: jsonResponse };
  }
}

export default class ExternalServices {
  constructor(category) {
    //this.category = category;
    // this.path = `../json/${this.category}.json`;
  }
  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    // console.log(response);
    const data = await convertToJson(response);
    // console.log(data);
    return data.Result;
}
  async findProductById(id) {
    const response = await fetch(baseURL + `product/${id}`);
    const data = await convertToJson(response);
    // console.log(data);
    return data.Result;

    // const products = await this.getData();
    // return products.find((item) => item.Id === id);
  }

  async checkout(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + 'checkout/', options).then(convertToJson);
  }

  async loginRequest(creds) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(creds),
    };
    const response = await fetch(baseURL + 'login', options).then(
      convertToJson
    );
    return response.accessToken;

  }

  async getOrders(token) {
    const options = {
      method: 'GET',
      // the server will reject our request if we don't include the Authorization header with a valid token!
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(baseURL + 'orders', options).then(convertToJson);
    return response;
  }
}
