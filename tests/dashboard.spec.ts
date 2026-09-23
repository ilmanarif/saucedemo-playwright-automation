import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Pengujian Halaman Dashboard / Produk', () => {

  test('Memastikan pengguna berhasil melihat daftar produk setelah login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // 1. Buka halaman utama / login
    await page.goto('/');

    // 2. Lakukan login menggunakan kredensial yang valid
    await loginPage.login('standard_user', 'secret_sauce');

    // 3. Validasi apakah berhasil masuk ke halaman produk/dashboard
    await expect(page).toHaveURL(/.*dashboard.html/);
    
    // 4. Validasi elemen keranjang atau judul produk muncul
    const productTitle = page.locator('.title');
    await expect(productTitle).toHaveText('Products');
  });

});