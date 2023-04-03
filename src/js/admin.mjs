import ExternalServices from './ExternalServices.mjs';
import { alertMessage } from './utils.mjs';

export default class Admin {
  constructor(divider) {
    this.mainElement = document.querySelector(divider);
    this.token = null;
    this.services = new ExternalServices();
    this.showLogin();
  }

  async login(creds, next) {
    // I built the login method with a callback: next.
    // This makes it much more flexible...
    // there could be many different things the user wants to do after logging in...
    // this allows us that flexibility without having to write a bunch of login methods

    try {
      this.token = await this.services.loginRequest(creds);
      next();
    } catch (err) {
      // remember this from before?
      alertMessage(err.message.message);
    }
  }

  async showOrders() {
    try {
      const orders = await this.services.getOrders(this.token);
      this.mainElement.innerHTML = this.orderTemplate();
      const parent = document.querySelector('#orders tbody');
      // why not a template like we have done before?  The markup here was simple enough that I didn't think it worth the overhead...but a template would certainly work!
      parent.innerHTML = orders
        .map(
          (order) =>
            `<tr><td>${order.id}</td><td>${new Date(
              order.orderDate
            ).toLocaleDateString('en-US')}</td><td>${
              order.items.length
            }</td><td>${order.orderTotal}</td></tr>`
        )
        .join('');
    } catch (err) {
      console.log(err);
    }
  }

    showLogin() {
        this.mainElement.innerHTML = this.formTemplate();

        document.querySelector('#checkoutSubmit').addEventListener('click', (e) => {
            e.preventDefault();
                const email = document.querySelector('#email').value;
                const password = document.querySelector('#password').value;
                this.login({ email, password }, this.showOrders.bind(this));
            });

    }

   formTemplate() {
    return `
        <section class="form-admin">
        <h2>Login to Access the Admin Page</h2>
        <form
        id="checkout2"
        name="checkuot"
        action="#"
        >
            <fieldset class="data">
            <legend>Login</legend>
            <div class="inpts state">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="user1@email.com" required/>
            </div>
            <div class="inpts zip">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value="user1" required/>
            </div>
            </fieldset>
            <button type="submit" id="checkoutSubmit" >Login</button>
            </form>
        </section>
        `;
   }


  orderTemplate() {
      return `
        <h2>Current Orders</h2>
        <table id="orders">
        <thead>
        <tr><th>Id</th><th>Date</th><th>#Items</th><th>Total</th>
        </thead>
        <tbody class="order-body"></tbody>
        </table>
      `;
  }
}



const admin = new Admin('.main');
