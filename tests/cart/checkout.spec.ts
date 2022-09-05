import { test, expect, Page } from '@playwright/test';
import { Checkout } from '../../pages/cart/checkout';
import { ProductDetails } from '../../pages/productDetails';
import { CartSummary } from '../../pages/cart/cartSummary';

let productId = 144;

test.beforeEach(async ({ page }) => {
    
    // Add 1 product to cart, go to checkout
    await page.goto(`/index.php?route=product/product&product_id=${productId}`);
    retries: 3;
    const productDetails = new ProductDetails(page);
    await productDetails.addProductToCart();
    const cartSummary = new CartSummary(page);
    await cartSummary.clickCheckoutButton();
});



test('Fill all checkout fields ~ positive', async ({ page }) => {

    const checkout = new Checkout(page);

    await expect(checkout.checkoutTitle, 'incorrect page title').toHaveText('CHECKOUT');
    await expect(checkout.billingAddressTitle, 'incorrect billing address block title').toHaveText('Billing Address');
    await expect(checkout.summaryToggleButton, 'checkbox is not checked by default').toBeChecked();
    await checkout.fillAllFields();
});