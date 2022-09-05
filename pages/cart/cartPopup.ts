import { Locator, Page } from '@playwright/test';

export class CartPopup {
    readonly page: Page;
    readonly cartModal: Locator;
    readonly goToCartButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor (page: Page) {
        this.cartModal = page.locator('#cart-popup');
        this.goToCartButton = page.locator('.cart-popup__cart-link');
        this.continueShoppingButton = page.locator('#cart-popup__close-button');
    }

    async pressGoToCartButton() {
        await this.goToCartButton.click();
    }

    async pressContinueShoppingButton() {
        await this.continueShoppingButton.click();
    }

}