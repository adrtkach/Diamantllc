import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../../pages/homePage';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('Search button opens Search field', async ({ page }) => {

    const homePage = new HomePage(page);

    await expect (homePage.searchButton, 'incorrect searchButton link').toHaveAttribute('data-href', /.*search/);

    // Verify not activated Search
    await expect(homePage.searchInput).toHaveCSS('display', 'none');
    await expect(homePage.searchCloseButton).toHaveCSS('display', 'none');
    
    // Activate search
    await homePage.searchButton.click(); 

    // Verify activated Search
    await expect(homePage.searchInput).toHaveCSS('display', 'block');
    await expect(homePage.searchCloseButton).toHaveCSS('display', 'block'); 

    // Deactivate search
    await homePage.searchCloseButton.click();

    // Verify not activated Search
    await expect(homePage.searchInput).toHaveCSS('display', 'none');
    await expect(homePage.searchCloseButton).toHaveCSS('display', 'none');    

});

test('Cart link', async ({ page }) => {

    const homePage = new HomePage(page);
    await expect(homePage.cartButton, 'incorrect cartButton link').toHaveAttribute('href', /.*cart/);
});

test('Navigation links', async ({ page }) => {

    const homePage = new HomePage(page);
    await expect.soft(homePage.navCustomShop, 'incorrect navCustomShop link').toHaveAttribute('href', /.*custom-shop/);
    await expect.soft(homePage.navBlog, 'incorrect navBlog link').toHaveAttribute('href', /.*blog/);
    await expect.soft(homePage.navAboutUs, 'incorrect navAboutUs link').toHaveAttribute('href', /.*about-us/);
    await expect.soft(homePage.navContacts, 'incorrect navContacts link').toHaveAttribute('href', /.*contacts/);
});

test('Menu links', async ({ page }) => {

    const homePage = new HomePage(page);
    await expect.soft(homePage.menuBracelets, 'incorrect menuBracelets link').toHaveAttribute('href', /.*jewelry\/bracelets/);
    await expect.soft(homePage.menuEarrings, 'incorrect menuEarrings link').toHaveAttribute('href', /.*jewelry\/earrings/);
    await expect.soft(homePage.menuNecklaces, 'incorrect menuNecklaces link').toHaveAttribute('href', /.*jewelry\/necklaces-pendants/);
    await expect.soft(homePage.menuRings, 'incorrect menuRings link').toHaveAttribute('href', /.*jewelry\/rings/);
});
