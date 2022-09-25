import { test, expect, Page } from '@playwright/test';
import { ProductDetails } from '../../pages/productDetails/productDetails';
import { CartSummary } from '../../pages/cart/cartSummary';
import { Checkout } from '../../pages/cart/checkout';

let productId = 144;

test.beforeEach(async ({ page }) => {
    
    // Go to Product details page, add 1 product to cart
    await page.goto(`/index.php?route=product/product&product_id=${productId}`);
    const productDetails = new ProductDetails(page);

    await productDetails.addProductToCart();
});

test('One product added to cart', async ({ page }) => {

    const cartSummary = new CartSummary(page);

    await expect(cartSummary.productRow, 'incorrect number of products in Cart').toHaveCount(1);
    await expect(cartSummary.productQuantity, 'incorrect product quantity').toHaveText('1 un.'); // quantity = 1 by default
});

test('Click Checkout', async ({ page }) => {

    const cartSummary = new CartSummary(page);
    const checkout = new Checkout(page);

    await cartSummary.clickCheckoutButton();
    await expect(checkout.checkoutTitle, 'incorrect page title').toHaveText('Checkout');

    
});

