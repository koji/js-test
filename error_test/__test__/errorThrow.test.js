test("throw Error when passing no val", () => {
  class Foo {
    constructor({ message }) {
      this.message = message;
    }
  }

  expect(() => new Foo()).toThrow();
  expect(() => new Foo()).toThrow(TypeError);
  expect(() => new Foo()).toThrow(
    `Cannot destructure property 'message' of 'undefined' as it is undefined.`
  );
});
