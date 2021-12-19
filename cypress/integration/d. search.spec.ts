/// <reference types= "cypress"/>

import { cookiesSaver } from "../fixtures/tools-and-functions"
import { MainPage } from "../../src/pages/main-page"

const stringToSearch: string = "פרח";

Cypress.on("uncaught:exception", (err) => {
    return false;
});

describe("Search on website Test", () => {
    const page = new MainPage();

    beforeEach("Before each", () => {
        cookiesSaver();
    })

    before("Open the website", () => {
        page.goToPage()
    });

    it("Search on website", () => {
        page.searchOnWebsite(stringToSearch)
    });

});
