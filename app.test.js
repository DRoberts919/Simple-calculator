// const puppeteer = require("puppeteer");

// (async function main() {
//   try {
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
//     await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });

//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     console.log("done");
//     await browser.close();
//   } catch (e) {
//     console.log("Err", e);
//   }
// })();

const timeout = 20000;
beforeAll(async () => {
  await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
});
describe("Test page title and header", () => {
  test(
    "page title",
    async () => {
      const title = await page.title();
      expect(title).toBe("calculator");
    },
    timeout
  );
});

test(
  "ADD 2 + 2",
  async () => {
    const one = await page.$("#one");
    await one.evaluate((one) => one.click());

    const add = await page.$("#add");
    await add.evaluate((add) => add.click());

    const oneAgain = await page.$("#one");
    await oneAgain.evaluate((one) => one.click());

    const equals = await page.$("#equals");
    await equals.evaluate((eq) => eq.click());

    const view = await page.$("#screen", (element) => element.innerHTML);
    const value = await page.evaluate((el) => el.textContent, view);
    expect(value).toEqual("2");

    const clear = await page.$("#clear");
    await clear.evaluate((clear) => clear.click());
  },
  timeout
);

test(
  "SUBTRACT 10 - 6",
  async () => {
    const one = await page.$("#one");
    await one.evaluate((one) => one.click());

    const zero = await page.$("#zero");
    await zero.evaluate((one) => one.click());

    const add = await page.$("#sub");
    await add.evaluate((add) => add.click());

    const six = await page.$("#six");
    await six.evaluate((one) => one.click());

    const equals = await page.$("#equals");
    await equals.evaluate((eq) => eq.click());

    const view = await page.$("#screen", (element) => element.innerHTML);
    const value = await page.evaluate((el) => el.textContent, view);
    expect(value).toEqual("4");

    const clear = await page.$("#clear");
    await clear.evaluate((clear) => clear.click());
  },
  timeout
);

test(
  "MULTIPLY 20 X 20",
  async () => {
    const two = await page.$("#two");
    await two.evaluate((two) => two.click());

    const zero = await page.$("#zero");
    await zero.evaluate((one) => one.click());

    const mult = await page.$("#mult");
    await mult.evaluate((mult) => mult.click());

    const twoAgain = await page.$("#two");
    await twoAgain.evaluate((one) => one.click());

    const zeroAgain = await page.$("#zero");
    await zeroAgain.evaluate((one) => one.click());

    const equals = await page.$("#equals");
    await equals.evaluate((eq) => eq.click());

    const view = await page.$("#screen", (element) => element.innerHTML);
    const value = await page.evaluate((el) => el.textContent, view);
    expect(value).toEqual("400");

    const clear = await page.$("#clear");
    await clear.evaluate((clear) => clear.click());
  },
  timeout
);

test(
  "DIVIDE 20 / 2",
  async () => {
    const two = await page.$("#two");
    await two.evaluate((two) => two.click());

    const zero = await page.$("#zero");
    await zero.evaluate((one) => one.click());

    const divide = await page.$("#divide");
    await divide.evaluate((mult) => mult.click());

    const twoAgain = await page.$("#two");
    await twoAgain.evaluate((one) => one.click());

    const equals = await page.$("#equals");
    await equals.evaluate((eq) => eq.click());

    const view = await page.$("#screen", (element) => element.innerHTML);
    const value = await page.evaluate((el) => el.textContent, view);
    expect(value).toEqual("10");

    const clear = await page.$("#clear");
    await clear.evaluate((clear) => clear.click());
  },
  timeout
);
