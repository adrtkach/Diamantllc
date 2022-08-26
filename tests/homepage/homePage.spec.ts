import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../../pages/homePage';

const mainUrl: String = 'http://develop.diamantllc.us';

test.beforeEach(async ({ page }) => {
    await page.goto(`${mainUrl}`);
    retries: 3;
});

test('Search button opens Search field', async ({ page }) => {

    const homePage = new HomePage(page);

    await expect (homePage.searchButton, 'incorrect searchButton link').toHaveAttribute('data-href', 'https://develop.diamantllc.us/search');

    const NotActivatedSearchAssert = async function() {
        expect(homePage.searchInput).toHaveCSS('display', 'none'); // no AWAIT because it calls the function 
        expect(homePage.searchCloseButton).toHaveCSS('display', 'none');
    }

    const ActivatedSearchAssert = async function() {
        expect(homePage.searchInput).not.toHaveCSS('display', 'none');
        expect(homePage.searchCloseButton).not.toHaveCSS('display', 'none'); 
    } 

    await NotActivatedSearchAssert();
    await homePage.searchButton.click(); // activate search
    await ActivatedSearchAssert();
    await homePage.searchCloseButton.click(); // deactivate search
    await NotActivatedSearchAssert();
});

test('Cart link', async ({ page }) => {

    const homePage = new HomePage(page);
    await expect(homePage.cartButton, 'incorrect cartButton link').toHaveAttribute('href', `${mainUrl}/cart`);
});

test('Navigation links', async ({ page }) => {

    const homePage = new HomePage(page);
    await expect.soft(homePage.navCustomShop, 'incorrect navCustomShop link').toHaveAttribute('href', `${mainUrl}/custom-shop`);
    await expect.soft(homePage.navBlog, 'incorrect navBlog link').toHaveAttribute('href', `${mainUrl}/blog`);
    await expect.soft(homePage.navAboutUs, 'incorrect navAboutUs link').toHaveAttribute('href', `${mainUrl}/about-us`);
    await expect.soft(homePage.navContacts, 'incorrect navContacts link').toHaveAttribute('href', `${mainUrl}/contacts`);
});

test('Menu links', async ({ page }) => {

    const homePage = new HomePage(page);
    await expect.soft(homePage.menuBracelets, 'incorrect menuBracelets link').toHaveAttribute('href', `${mainUrl}/jewelry/bracelets`);
    await expect.soft(homePage.menuEarrings, 'incorrect menuEarrings link').toHaveAttribute('href', `${mainUrl}/jewelry/earrings`);
    await expect.soft(homePage.menuNecklaces, 'incorrect menuNecklaces link').toHaveAttribute('href', `${mainUrl}/jewelry/necklaces-pendants`);
    await expect.soft(homePage.menuRings, 'incorrect menuRings link').toHaveAttribute('href', `${mainUrl}/jewelry/rings`);
});