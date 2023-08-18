import { test, expect } from '@playwright/test';

test.describe('User login to Demobank',() => {

test('succesful login with correct credentials', async ({ page }) => {
     await page.goto('https://demo-bank.vercel.app/');
     await page.getByTestId('login-input').fill('testerLO');
     await page.getByTestId('password-input').fill('10987654');
     await page.getByTestId('login-button').click();
     

     await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
});

test('unsuccesful login with too short username', async ({ page }) => {
     await page.goto('https://demo-bank.vercel.app/');
     await page.getByTestId('login-input').fill('tester');
     await page.getByTestId('password-input').click();
     
     
     await expect(page.getByTestId('error-login-id')).toHaveText('identyfikator ma min. 8 znaków');

});

test('unsuccesful login with too short password', async ({ page }) => {
     await page.goto('https://demo-bank.vercel.app/');
     await page.getByTestId('login-input').fill('testerLO');
     await page.getByTestId('password-input').fill('pupcia');
     await page.getByTestId('password-input').blur();
     
     await expect(page.getByTestId('error-login-password')).toHaveText('hasło ma min. 8 znaków');

});
});