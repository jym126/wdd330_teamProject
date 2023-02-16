<<<<<<< HEAD:src/js/ExternalServices.mjs
// const baseURL = 'https://wdd330-backend.onrender.com/'
=======
>>>>>>> 38e11e1fb8deab22bc4674fe0d5688e1220a2c45:src/js/ProductData.mjs
const baseURL = 'https://wdd330-backend.onrender.com/'

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
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
}
