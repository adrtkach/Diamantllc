import { expect, Locator, Page } from '@playwright/test';

export class CartSummary {
    
    readonly page: Page;
    readonly productRow: Locator;
    readonly productQuantity: Locator;
    readonly checkoutButton: Locator;

    constructor (page: Page) {

        this.productRow = page.locator('#product-row');
        this.productQuantity = page.locator('#product-quantity__value');
        this.checkoutButton = page.locator('.summary-form__navigation > div a.summary-form__checkout-link')
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
}