import { AppComponent } from './app.component';

it('should run test', async () => {
  cy.mount(AppComponent);

  cy.contains('App').should('be.visible');
});
