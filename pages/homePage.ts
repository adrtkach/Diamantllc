import { Locator, Page } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly navCustomShop: Locator;
    readonly navBlog: Locator;
    readonly navAboutUs: Locator;
    readonly navContacts: Locator;
    readonly menuBracelets: Locator;
    readonly menuEarrings: Locator;
    readonly menuNecklaces: Locator;
    readonly menuRings: Locator;
    readonly searchButton: Locator;
    readonly cartButton: Locator;
    readonly searchInput: Locator;
    readonly searchCloseButton: Locator;
    readonly searchSubmitButton: Locator;

    constructor(page: Page) {
        this.page = page;

        // Search Field
        this.searchButton = page.locator('.header-search__submit-button');
        this.searchInput = page.locator('#header-search__input');
        this.searchCloseButton = page.locator('#header-search__close-button');
        this.searchSubmitButton = page.locator('#header-search__submit-button');


        // Cart Button
        this.cartButton = page.locator('.header__cart .header__cart-button');
        

        // Navigation Links
        this.navCustomShop = page.locator('.header__navigation a:has-text("Custom Shop")');
        this.navBlog = page.locator('.header__navigation a:has-text("Blog")');
        this.navAboutUs = page.locator('.header__navigation a:has-text("About Us")');
        this.navContacts = page.locator('.header__navigation a:has-text("Contacts")');

        // Navigation Menu
        this.menuBracelets = page.locator('.header__menu a:has-text("Bracelets")');
        this.menuEarrings = page.locator('.header__menu a:has-text("Earrings")');
        this.menuNecklaces = page.locator('.header__menu a:has-text("Necklaces & Pendants")');
        this.menuRings = page.locator('//*[@id="header"]/div[2]/div[2]/div[4]/a[text()="Rings"]');
    }

}