import { test, expect, Page } from '@playwright/test';
import { ProductDetails } from '../../pages/productDetails/productDetails';
import { CartPopup } from '../../pages/productDetails/components/cartPopup'

let productId = 144;

test.beforeEach(async ({ page }) => {
    
     // Go to Product details page
    await page.goto(`/index.php?route=product/product&product_id=${productId}`);
});

test('Added to Cart popup appears', async ({ page }) => {

    const productDetails = new ProductDetails(page);
    const cartPopup = new CartPopup(page);

    await expect(cartPopup.cartModal).not.toBeVisible();
    await productDetails.pressAddToCartButton();
    await expect(cartPopup.cartModal).toBeVisible();
});

test('Added to Cart popup - Continue shopping', async ({ page }) => {

    const productDetails = new ProductDetails(page);
    const cartPopup = new CartPopup(page);

    await productDetails.pressAddToCartButton();
    await cartPopup.pressContinueShoppingButton();
    await expect(cartPopup.cartModal).not.toBeVisible();
    await expect(page).toHaveURL(`/index.php?route=product/product&product_id=${productId}`)

});

test('Added to Cart popup - Go to Cart', async ({ page }) => {

    const productDetails = new ProductDetails(page);
    const cartPopup = new CartPopup(page);

    await productDetails.pressAddToCartButton();
    await expect(cartPopup.goToCartButton, 'incorrect cart link').toHaveAttribute('href', /.*cart/);

})