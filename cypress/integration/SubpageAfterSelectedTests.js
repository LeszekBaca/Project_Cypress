///<reference types = "cypress" />

import SubpageAfterSelectedPage from "../support/page-object/SubpageAfterSelectedPage";
import MainPage from "../support/page-object/MainPage";

describe("E2E - Subpage", () => {
  it("Checking the 'Back' button", () => {
    cy.visit("/home");

    MainPage.getSelectedRow().eq(0).should("be.visible").click({ force: true });

    SubpageAfterSelectedPage.getBackPushButton().click();
    cy.url().should("include", MainPage.getNamePage());
  });

  it("Star selection and unchecking check", () => {
    cy.visit("/home");

    MainPage.getSelectedRow().eq(0).should("be.visible").click({ force: true });

    SubpageAfterSelectedPage.starSelectionCheck().click({ force: true });
    SubpageAfterSelectedPage.starUncheckingCheckParent().should(
      "contain",
      SubpageAfterSelectedPage.starUncheckingText()
    );

    SubpageAfterSelectedPage.starUncheckingCheck().click({ force: true });
    SubpageAfterSelectedPage.starSelectionCheckParent().should(
      "contain",
      SubpageAfterSelectedPage.starSelectionText()
    );
  });
});
