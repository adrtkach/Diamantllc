import { Locator, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class Checkout {
    readonly page: Page;

    readonly checkoutTitle: Locator;
    readonly billingAddressTitle: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly telephone: Locator;
    readonly email: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
    readonly cardNumber: Locator;
    readonly cardExpireDate: Locator;
    readonly cardCsc: Locator;

    readonly shipToBillingAddressCheckbox: Locator;
    readonly shippingAddressTitle: Locator;
    readonly shippingFirstName: Locator;
    readonly shippingLastName: Locator;
    readonly shippingAddress: Locator;
    readonly shippingCity: Locator;
    readonly shippingState: Locator;
    readonly shippingZipCode: Locator;

    readonly confirmButton: Locator;

    readonly summaryToggleButton: Locator;
    // summary price ...

    constructor (page: Page) {
        this.checkoutTitle = page.locator('.checkout-page__title');
        this.billingAddressTitle = page.locator('.payment-form__title');
        this.firstName = page.locator('[name="payment_address[firstname]"]');
        this.lastName = page.locator('[name="payment_address[lastname]"]');
        this.telephone = page.locator('[name="payment_address[telephone]"]')
        this.email = page.locator('[name="payment_address[email]"]');
        this.address = page.locator('[name="payment_address[address]"]');
        this.city = page.locator('[name="payment_address[city]"]');
        this.state = page.locator('[name="payment_address[zone_id]"]');
        this.zipCode = page.locator('[name="payment_address[postcode]"]');
        this.cardNumber = page.locator('#card-form__card-number');
        this.cardExpireDate = page.locator('#card-form__expire-date');
        this.cardCsc = page.locator('#card-form__csc');

        // Billing address
        this.shipToBillingAddressCheckbox = page.locator('#shipping-question__checkbox');
        this.shippingAddressTitle = page.locator('.shipping-form__title');
        this.shippingFirstName = page.locator('[name="shipping_address[firstname]"]');
        this.shippingLastName = page.locator('[name="shipping_address[lastname]"]');
        this.shippingAddress = page.locator('[name="shipping_address[address]"]');
        this.shippingCity = page.locator('[name="shipping_address[city]"]');
        this.shippingState = page.locator('[name="shipping_address[zone_id]"]');
        this.shippingZipCode = page.locator('[name="shipping_address[postcode]"]');

        this.confirmButton = page.locator('#checkout-page__submit-button');

        this.summaryToggleButton = page.locator('#shopping-cart__toggle-button');

    }

    async fillAllFields() {
        await this.firstName.type(faker.name.firstName());
        await this.lastName.fill(faker.name.lastName());
        await this.telephone.type(faker.phone.number('##########'))    
        await this.email.fill(faker.internet.email());
        await this.address.fill(faker.address.street());
        await this.city.fill(faker.address.city());
        await this.state.selectOption( { value: '3626'});
        await this.zipCode.fill(faker.address.zipCode());
        await this.cardNumber.type(faker.finance.creditCardNumber());

        let monthRandom: any = Math.floor(Math.random() * 12) + 1;
        if ( monthRandom < 10 ) {
            monthRandom = '0' + monthRandom; 
        }

        let yearRandom: any = Math.floor(Math.random() * 50) + 24;

        let expireDate = `${monthRandom} + ${yearRandom}` 
        
        await this.cardExpireDate.fill(expireDate);
        await this.cardCsc.type(faker.finance.creditCardCVV());
    }

}
