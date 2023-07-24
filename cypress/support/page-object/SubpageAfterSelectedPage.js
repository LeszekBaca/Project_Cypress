class SubpageAfterSelectedPage {
  getBackPushButton() {
    return cy.get("button.navBtn");
  }

  starUncheckingCheck() {
    return this.starUncheckingCheckParent().children('img[alt="add to fav"]');
  }

  starUncheckingText() {
    return "Delete from favorites";
  }

  starSelectionCheck() {
    return this.starSelectionCheckParent().children('img[alt="delete fav"]');
  }

  starSelectionText() {
    return "Add to favorites";
  }

  starSelectionCheckParent() {
    return cy.get('p[ng-hide="checkFav(x.id)"]');
  }

  starUncheckingCheckParent() {
    return cy.get('p[ng-show="checkFav(x.id)"]');
  }
}

export default new SubpageAfterSelectedPage();
