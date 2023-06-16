function add(a, b) {
  return a + b;
}

test("add() should add two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(3, 7)).toBe(10);
});
