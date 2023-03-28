import GameSavingLoader from '../GameSavingLoader';

jest.setTimeout(15000);

test('testing async loading', async () => {
  const data = await GameSavingLoader.load();
  expect(data.id).toBe(9);
});
