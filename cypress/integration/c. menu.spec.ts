/// <reference types= "cypress"/>

import { cookiesSaver } from "../fixtures/tools-and-functions"
import { MainPage } from "../../src/pages/main-page"

Cypress.on("uncaught:exception", (err) => {
    return false;
});

describe("Check the list of flowers in menu", () => {
    const page = new MainPage();
    
    beforeEach("Before each", () => {
        cookiesSaver();
    })

    before("Open the website", () => {
        page.goToPage()
    });

    it("Check the menu bar", () => {
        page.checkTheMenu()
    });
    
});
