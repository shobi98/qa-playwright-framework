import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPages';
import { InventoryPage } from '../pages/InventoryPage';
import { users } from '../test-data/users';

test('Add backpack to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);      
    await loginPage.gotoLoginPage();
    await loginPage.login(users.standardUser.username, users.standardUser.password);
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();
    await expect(page.locator('.inventory_item_name'))
    .toContainText('Sauce Labs Backpack');
});
