/// <reference types= "cypress"/>

import { SignUpPage } from "../../src/pages/sign-up-page";
import { cookiesSaver } from "../fixtures/tools-and-functions"

Cypress.on("uncaught:exception", (err) => {
    return false;
});

describe("Create a new account in ZER4U! test", () => {
    const signUpPage = new SignUpPage();

    beforeEach("cookiesSaver", () => {
        cookiesSaver()
    })

    it("Open the Sign up page", () => {
        signUpPage.goToPage();
    });

    it("Sign up as ", () => {
        signUpPage.signUp();
    });
});
