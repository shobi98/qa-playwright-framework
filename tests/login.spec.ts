import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPages';
import { users } from '../test-data/users';

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(users.standardUser.username, users.standardUser.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);
    await expect(page.locator('.error-message-container')).toBeVisible();
}); 
