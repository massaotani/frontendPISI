import sum from '../src/components/Dropzone/app';

test('Point created successfully', () => {
  expect(sum(1, 2)).toBe(3);
});