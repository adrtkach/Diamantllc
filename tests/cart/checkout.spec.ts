import { test, expect, Page } from '@playwright/test';
import { Checkout } from '../../pages/cart/checkout';
import { ProductDetails } from '../../pages/productDetails/productDetails';
import { CartSummary } from '../../pages/cart/cartSummary';

let productId = 144;

test.beforeEach(async ({ page }) => {
    
    // Add 1 product to cart, go to checkout
        await page.goto(`/index.php?route=product/product&product_id=${productId}`);

    const productDetails = new ProductDetails(page);
    const cartSummary = new CartSummary(page);
    
    await productDetails.addProductToCart();
    await cartSummary.clickCheckoutButton();
});



test('Fill all checkout fields + Submit order ~ positive', async ({ page }) => {

    const checkout = new Checkout(page);

    await expect(checkout.billingAddressTitle, 'incorrect billing address block title').toHaveText('Billing Address');
    await checkout.fillAllFields();
    // expect success message
});

test('"Ship to billing address" checkbox should be checked by default', async ({ page }) => {
    const checkout = new Checkout(page);

    await expect(checkout.shipToBillingAddressCheckbox, 'checkbox is not checked by default').toBeChecked();
});