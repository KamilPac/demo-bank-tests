import { test, expect } from "@playwright/test";

test.describe("User login to Demobank", () => {
  test.beforeEach(async ({ page }) => {
    const url = "https://demo-bank.vercel.app/";
    await page.goto(url);
  });
  test("succesful login with correct credentials", async ({ page }) => {
    // Arrange

    const userId = "testerLO";
    const userPassword = "10987654";
    const expectedUserName = "Jan Demobankowy";

    // Act
    await page.getByTestId("login-input").fill(userId);
    await page.getByTestId("password-input").fill(userPassword);
    await page.getByTestId("login-button").click();

    // Assert
    await expect(page.getByTestId("user-name")).toHaveText(expectedUserName);
  });

  test("unsuccesful login with too short username", async ({ page }) => {
    // Arrange
    const tooShortUserId = "tester";
    const expectedErrorMessage = "identyfikator ma min. 8 znaków";

    // Act
    await page.getByTestId("login-input").fill(tooShortUserId);
    await page.getByTestId("password-input").click();

    // Assert
    await expect(page.getByTestId("error-login-id")).toHaveText(
      expectedErrorMessage
    );
  });

  test("unsuccesful login with too short password", async ({ page }) => {
    // Arrange
    const userId = "testerLO";
    const incorrectPasswordId = "pupcia";
    const expectedErrorMessage = "hasło ma min. 8 znaków";

    // Act
    await page.getByTestId("login-input").fill(userId);
    await page.getByTestId("password-input").fill(incorrectPasswordId);
    await page.getByTestId("password-input").blur();

    // Assert
    await expect(page.getByTestId("error-login-password")).toHaveText(
      expectedErrorMessage
    );
  });
});
