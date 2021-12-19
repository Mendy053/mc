/// <reference types= "cypress"/>

import { MainPage } from "../../src/pages/main-page";
import { cookiesSaver } from "../fixtures/tools-and-functions"

Cypress.on("uncaught:exception", (err) => {
    return false;
});

describe("Log in to ZER4U test", () => {
    const logInPage = new MainPage();

    beforeEach("cookiesSaver", () => {
        cookiesSaver()
    })

    it("Open the log in page", () => {
        logInPage.goToPage()
    });

    it("Log in", () => {
        logInPage.logIn()
    });
});
