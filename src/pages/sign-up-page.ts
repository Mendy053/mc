/// <reference types= "cypress"/>
import { BasePage } from "./base-page";
import { locators } from "../locators/sign-up-locators";
import { use } from "chai";
import { userInfo } from "os";

export class SignUpPage extends BasePage {
    constructor() {
        super("/signup");
    }

    signUp() {
        cy.fixture("user-info.json").then((user) => {
            // Fill the user information
            cy.get(locators.name).clear().type(user.name);
            cy.get(locators.email).clear()
                .type((Math.floor(Math.random() * (99999 - 10000) + 10000)) + user.email);
            cy.get(locators.mobilePhone).clear().type(user.mobilePhone);
            cy.get(locators.password).clear().type(user.password);
            cy.get(locators.termsConfirm).check();
            cy.get(locators.submitButton).click();
        });

    }
}