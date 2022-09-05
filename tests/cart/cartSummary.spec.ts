import { test, expect, Page } from '@playwright/test';
import { ProductDetails } from '../../pages/productDetails';
import { CartSummary } from '../../pages/cart/cartSummary';

let productId = 144;

test.beforeEach(async ({ page }) => {
    
    // Go to Product details page
    await page.goto(`/index.php?route=product/product&product_id=${productId}`);
    retries: 3;
});

test('One product added to cart', async ({ page }) => {

    const cartSummary = new CartSummary(page);
    const productDetails = new ProductDetails(page);

    await productDetails.addProductToCart();
    await expect(cartSummary.productRow, 'incorrect number of products in Cart').toHaveCount(1);
    await expect(cartSummary.productQuantity, 'incorrect product quantity').toHaveText('1 un.'); // quantity = 1 by default

});

test('Go to Checkout Page', async ({ page }) => {

    const cartSummary = new CartSummary(page);
    const productDetails = new ProductDetails(page);

    await productDetails.addProductToCart();
    await cartSummary.clickCheckoutButton();
    
});

