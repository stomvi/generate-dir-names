import generateDirNames from './index';

test('Default settings', () => {
  const dirNames = generateDirNames();
  expect(dirNames).toMatch(/^[a-f0-9]{2}$/);
});

test('Length in 3', () => {
  const dirNames = generateDirNames({ length: 3 });
  expect(dirNames).toMatch(/^[a-f0-9]{3}$/);
});

test('Depth in 3', () => {
  const dirNames = generateDirNames({ depth: 3 });
  console.log('dirNames :>> ', dirNames);
  expect(dirNames).toMatch(/^[a-f0-9]{2}\/[a-f0-9]{2}\/[a-f0-9]{2}$/);
});

test('Depth in 4 and length in 5', () => {
  const dirNames = generateDirNames({ depth: 4, length: 5 });
  console.log('dirNames :>> ', dirNames);
  expect(dirNames).toMatch(/^[a-f0-9]{5}\/[a-f0-9]{5}\/[a-f0-9]{5}\/[a-f0-9]{5}$/);
});
