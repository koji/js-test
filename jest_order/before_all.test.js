describe("before & after timing", () => {
  beforeAll(() => console.log("beforeAll 1"));
  afterAll(() => console.log("afterAll 1"));
  beforeEach(() => console.log("beforeEach 1"));
  afterEach(() => console.log("afterEach 1"));
  test("this is my first test", () => console.log("test 1"));

  describe("before & after timing", () => {
    beforeAll(() => console.log("beforeAll 2"));
    afterAll(() => console.log("afterAll 2"));
    beforeEach(() => console.log("beforeEach 2"));
    afterEach(() => console.log("afterEach 2"));
    test("this is my test", () => console.log("test 2"));
  });
});
