# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Modul Login Demo >> user dapat login dengan sukses menggunakan akun standar
- Location: tests\login.spec.ts:5:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#user-name')

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | // Contoh penyesuaian di dalam pages/LoginPage.ts
  4  | export class LoginPage {
  5  |   readonly page: Page;
  6  |   readonly usernameInput: Locator;
  7  |   readonly passwordInput: Locator;
  8  |   readonly loginButton: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     // Sesuaikan dengan id yang ada di index.html aplikasi mock kita
  13 |     this.usernameInput = page.locator('#user-name'); 
  14 |     this.passwordInput = page.locator('#password');
  15 |     this.loginButton = page.locator('#login-button');
  16 |   }
  17 | 
  18 |   async login(username: string, pass: string) {
> 19 |     await this.usernameInput.fill(username);
     |                              ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  20 |     await this.passwordInput.fill(pass);
  21 |     await this.loginButton.click();
  22 |   }
  23 | }
```