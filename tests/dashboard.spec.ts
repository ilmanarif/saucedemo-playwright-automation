import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Pengujian Halaman Dashboard / Katalog Produk', () => {

  test('Memastikan pengguna berhasil melihat katalog produk setelah login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await page.goto('/');

    await loginPage.login('standard_user', 'secret_sauce');

    const headingTitle = page.locator('h1');
    await expect(headingTitle).toHaveText('Katalog Produk Demo');
    
    const addToCartButton = page.locator('#add-to-cart-item-1');
    await expect(addToCartButton).toBeVisible();
  });

});