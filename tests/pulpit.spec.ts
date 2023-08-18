import { test, expect } from '@playwright/test';


      
    const randomRange = (myMin: number, myMax: number) => Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
    const amount = '2150'
    const title = 'Test payment'
    test.describe('Pulpit tests', () => {
        test('quick payment with corrrect data', async ({ page }) => {
            await page.goto('https://demo-bank.vercel.app/');
            await page.getByTestId('login-input').fill('testerLO');
            await page.getByTestId('password-input').fill('password');
            await page.getByTestId('login-button').click();
            await page.locator('#widget_1_transfer_receiver').selectOption(`${randomRange(1, 3)}`);
            let name = await page.locator('#uniform-widget_1_transfer_receiver > span').textContent()
            
            await page.locator('#widget_1_transfer_amount').fill(amount);
            await page.locator('#widget_1_transfer_title').fill(title);
            await page.getByRole('button', { name: 'wykonaj' }).click();
            await page.getByTestId('close-button').click();
            await expect(page.locator('#show_messages')).toHaveText(`Przelew wykonany! ${name} - ${amount},00PLN - ${title}`)
        });


    
      

test.only('test', async ({ page }) => {
  await page.goto('https://demo-bank.vercel.app/');
  await page.getByTestId('login-input').fill('testerlo');
  await page.getByTestId('password-input').fill('password');
  await page.getByTestId('login-button').click();

  await page.locator('#widget_1_topup_receiver').selectOption('500 xxx xxx');
  await page.locator('#widget_1_topup_amount').fill('50');
  await page.locator('#uniform-widget_1_topup_agreement span').click();
  await page.getByRole('button', { name: 'doładuj telefon' }).click();
  await page.getByTestId('close-button').click();

  await expect(page.locator('#show_messages')).toHaveText('Doładowanie wykonane! 50,00PLN na numer 500 xxx xxx')
});
     








    });




