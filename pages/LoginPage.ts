import { Page, Locator } from '@playwright/test';

// Contoh penyesuaian di dalam pages/LoginPage.ts
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Sesuaikan dengan id yang ada di index.html aplikasi mock kita
    this.usernameInput = page.locator('#user-name'); 
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async login(username: string, pass: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}