import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator; // Tambahan untuk menangkap pesan error

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name'); 
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    
    // Sesuaikan selector ini dengan id, class, atau atribut error di HTML aplikasi Anda
    // (Contoh: '#error-message', '.alert-danger', atau '[data-test="error"]')
    this.errorMessage = page.locator('#error-message');
  }

  async login(username: string, pass: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}