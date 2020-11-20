import checkItems from "../src/components/Dropzone/app";

test("All items are accessible!", () => {
  const testResponse = "";
  expect(checkItems(testResponse)).toBe(true);
});
