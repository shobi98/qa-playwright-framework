import { Page } from '@playwright/test';

export class InventoryPage {

    constructor(public page: Page) { }  

   

     async addBackpackToCart() {
         await this.page.click('#add-to-cart-sauce-labs-backpack');
    }

      async openCart() {
        await this.page.click('.shopping_cart_link');
  }
}

