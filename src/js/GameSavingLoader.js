import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((saving) => {
        const savingObj = JSON.parse(saving);
        return new GameSaving(savingObj.id, savingObj.created, savingObj.userInfo);
      })
      .then((saving) => saving);
  }
}
