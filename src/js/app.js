import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    GameSavingLoader.load();
  } catch (e) {
    console.log(e);
  }
})();
