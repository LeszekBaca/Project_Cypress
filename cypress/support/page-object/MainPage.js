class MainPage {
  getNamePage() {
    return "/home";
  }
  getInputTextLineSearch() {
    return cy.get('input[placeholder="search.."]');
  }

  getReturnResultFilter() {
    return cy.get(
      'div[ng-repeat = "x in shows | filter:search | itemsPerPage: perPage | orderBy:sortKey:reverse"]'
    );
  }

  getButtonWithXMark() {
    return cy.get("button.clearSearch");
  }

  getDropDownListRecordsOnPage() {
    return cy.get('select[ng-model = "perPage"]');
  }

  getSelectedRow() {
    return cy
      .get(
        'div[ng-repeat = "x in shows | filter:search | itemsPerPage: perPage | orderBy:sortKey:reverse"]'
      )
      .children('a[href = "#/details/2581962"]')
      .children("div.ng-binding");
  }

  getSelectedNewRow() {
    return cy
      .get(
        'div[ng-repeat = "x in shows | filter:search | itemsPerPage: perPage | orderBy:sortKey:reverse"]'
      )
      .children('a[href = "#/details/2510920"]')
      .children("div.ng-binding");
  }

  getReturnResultFilterStars() {
    return cy.get('div[class = "row ng-scope"][ng-repeat="x in shows"]');
  }
}

export default new MainPage();
