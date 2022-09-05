import { Locator, Page } from '@playwright/test';
import { CartPopup } from './cart/cartPopup';


export class ProductDetails {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly cartPopup: Locator;

    constructor (page: Page) {
        this.addToCartButton = page.locator('#product-page__cart-button');
        const cartPopup = new CartPopup(page);

    }

    async pressAddToCartButton() {
        await this.addToCartButton.click();
    }

    async addProductToCart() {
        await this.pressAddToCartButton();
        await this.page.locator('.cart-popup__cart-link').click();
    }

    
}