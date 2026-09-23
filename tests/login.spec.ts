import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; // Sesuaikan path Page Object Anda

test.describe('Pengujian Fitur Login (Positive & Negative Case)', () => {

  // --- POSITIVE CASE ---
  test('User dapat login dengan sukses menggunakan akun standar', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Verifikasi berhasil masuk ke halaman inventaris/produk
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  // --- NEGATIVE CASE 1: Password Salah ---
  test('User gagal login saat memasukkan password yang salah', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await page.goto('/');
    await loginPage.login('standard_user', 'salah_password');
    
    // Verifikasi muncul pesan error yang sesuai di aplikasi
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
  });

  // --- NEGATIVE CASE 2: Akun Terkunci (Locked Out User) ---
  test('User gagal login menggunakan akun yang terkunci', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await page.goto('/');
    await loginPage.login('locked_out_user', 'secret_sauce');
    
    // Verifikasi pesan error khusus akun terkunci
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.');
  });

});