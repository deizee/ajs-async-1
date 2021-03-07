import GameSaving from './GameSaving';
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then(
  (saving) => new GameSaving(saving),
  (error) => error
);
