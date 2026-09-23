# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Modul Login SauceDemo >> user dapat login dengan sukses menggunakan akun standar
- Location: tests\login.spec.ts:5:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('[data-test="username"]')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Demo Login" [level=2] [ref=e3]
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]: "Username:"
      - textbox "Username:" [ref=e7]:
        - /placeholder: Masukkan username
    - generic [ref=e8]:
      - generic [ref=e9]: "Password:"
      - textbox "Password:" [ref=e10]:
        - /placeholder: Masukkan password
    - button "Login" [ref=e11] [cursor=pointer]
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly usernameInput: Locator;
  6  |   readonly passwordInput: Locator;
  7  |   readonly loginButton: Locator;
  8  | 
  9  |   constructor(page: Page) {
  10 |     this.page = page;
  11 |     // Menggunakan locator berbasis atribut data-test khas SauceDemo
  12 |     this.usernameInput = page.locator('[data-test="username"]');
  13 |     this.passwordInput = page.locator('[data-test="password"]');
  14 |     this.loginButton = page.locator('[data-test="login-button"]');
  15 |   }
  16 | 
  17 |   async goto() {
  18 |     await this.page.goto('/'); // Akan otomatis membuka baseURL dari config
  19 |   }
  20 | 
  21 |   async login(username: string, pass: string) {
> 22 |     await this.usernameInput.fill(username);
     |                              ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  23 |     await this.passwordInput.fill(pass);
  24 |     await this.loginButton.click();
  25 |   }
  26 | }
```