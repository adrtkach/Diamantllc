import { Locator, Page } from '@playwright/test';
import { CartPopup } from './components/cartPopup';


export class ProductDetails extends CartPopup{
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly cartPopup: Locator;

    constructor (page: Page) {
        super(page);
        this.addToCartButton = page.locator('#product-page__cart-button');
    }

    async pressAddToCartButton() {
        await this.addToCartButton.click();
    }

    async addProductToCart() {
        await this.addToCartButton.click();
        await super.pressGoToCartButton();
    }

    
}