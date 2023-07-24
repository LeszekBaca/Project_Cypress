///<reference types = "cypress" />

import MainPage from "../support/page-object/MainPage";
import SubpageAfterSelectedPage from "../support/page-object/SubpageAfterSelectedPage";

describe("E2E - Home Page", () => {
  it("Validation of the URL of the opened page", () => {
    cy.visit("/home");
    cy.url().should("include", MainPage.getNamePage());
  });

  it("Check the search field", () => {
    cy.visit("/home");

    MainPage.getInputTextLineSearch().type("Good");
    MainPage.getReturnResultFilter().should("have.length", 1);
  });

  it("Check filter off - X mark", () => {
    cy.visit("/home");

    MainPage.getInputTextLineSearch().type("Collector");
    MainPage.getReturnResultFilter().should("have.length", 2);

    MainPage.getButtonWithXMark().click();
    MainPage.getReturnResultFilter().should("have.length", 12);
  });

  it("Checking the drop-down list - the number of records on the page", () => {
    cy.visit("/home");

    MainPage.getDropDownListRecordsOnPage().first().select(0);
    MainPage.getReturnResultFilter().should("have.length", 12);

    MainPage.getDropDownListRecordsOnPage().first().select(1);
    MainPage.getReturnResultFilter().should("have.length", 12);

    MainPage.getDropDownListRecordsOnPage().first().select(1);
    MainPage.getReturnResultFilter().should("have.length", 25);

    //Lack 50 records missing. Only 45 are available
    MainPage.getDropDownListRecordsOnPage().first().select(2);
    MainPage.getReturnResultFilter().should("have.length", 50);

    //Lack 100 records missing. Only 45 are available
    MainPage.getDropDownListRecordsOnPage().first().select(3);
    MainPage.getReturnResultFilter().should("have.length", 100);
  });

  it("Checking the addition of stars", () => {
    cy.visit("/home");
    MainPage.getSelectedRow().eq(0).should("be.visible").click({ force: true });
    SubpageAfterSelectedPage.starSelectionCheck().click({ force: true });
    SubpageAfterSelectedPage.getBackPushButton().click();

    MainPage.getSelectedNewRow()
      .eq(0)
      .should("be.visible")
      .click({ force: true });
    SubpageAfterSelectedPage.starSelectionCheck().click({ force: true });
    SubpageAfterSelectedPage.getBackPushButton().click();

    MainPage.getReturnResultFilterStars().should("have.length", 2);
  });
});
