import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; // Sesuaikan path Page Object Anda

test.describe('Pengujian Fitur Login (Positive & Negative Case)', () => {

  // --- POSITIVE CASE ---
test('User dapat login dengan sukses menggunakan akun standar', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL(/.*dashboard.html/);
  });
  // --- NEGATIVE CASE 1: Password Salah ---
test('User gagal login saat memasukkan password yang salah', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await page.goto('/');

    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Login Gagal!');
      await dialog.accept();
    });

    await loginPage.login('standard_user', 'salah_password');
  });

  test('User gagal login menggunakan akun yang terkunci', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await page.goto('/');

    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Login Gagal!');
      await dialog.accept();
    });

    await loginPage.login('locked_out_user', 'secret_sauce');
  });

});