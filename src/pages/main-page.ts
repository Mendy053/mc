/// <reference types= "cypress"/>
import { BasePage } from "./base-page";
import { loginLocators } from "../locators/log-in-locators";
import { menuLocators } from "../locators/menu-locators";
import { searchLocators } from "../locators/search-locators";
import { flowersMenu } from "../../cypress/fixtures/tools-and-functions"

export class MainPage extends BasePage {
    constructor() {
        super();
    }

    logIn() {
        cy.fixture("user-info.json").then((user) => {
            // Open the form
            cy.contains(loginLocators.openForm).click();

            // Fill the fields
            cy.get(loginLocators.email).clear().type(user.email);
            cy.get(loginLocators.password).clear().type(user.password);
            cy.get(loginLocators.loginButton).click();

            cy.get(loginLocators.welcomeMassage).should("contain.text", "ברוך הבא")
                .then(() => {
                    cy.get(loginLocators.cancelIcon).should("be.visible").click()
                })
        })
    }

    checkTheMenu() {
        cy.get(menuLocators.flowers.mainMenu)
            .trigger("mouseover")
            .within(() => {
                cy.get(menuLocators.flowers.list)
                    .should("be.visible")
                    .each((el, index, list) => {
                        expect(el).to.contain(flowersMenu[index]);
                    })
            })
    }

    searchOnWebsite(stringToSearch: string) {
        cy.get(searchLocators.searchBar)
            .clear().type(`${stringToSearch}{enter}`);
        cy.get(searchLocators.products).as("products").each((product, index, list) => {
            cy.log(product.text());
        })

        cy.get(searchLocators.products).then(products => {
            if (products.length >= 12) {
                cy.get(searchLocators.nextResultsPage).click();
                cy.get(searchLocators.products)
                    .should("have.length.above", 0)
                    .each((product, index, list) => {
                        cy.log(product.text());
                    })
            }
        })
    }
}