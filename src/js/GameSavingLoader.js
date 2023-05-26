import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const saving = await json(data);
    const savingObj = JSON.parse(saving);
    return new GameSaving(savingObj.id, savingObj.created, savingObj.userInfo);
  }
}
