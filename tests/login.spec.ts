import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user dapat login dengan sukses menggunakan akun standar', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // WAJIB ADA: Membuka URL aplikasi lokal terlebih dahulu
  await page.goto('/'); 

  // Menjalankan aksi login
  await loginPage.login('standard_user', 'secret_sauce');

  // Verifikasi
  await expect(page).toHaveURL(/dashboard\.html/);
});