import test from 'ava';
import {
  noop,
  client,
  shouldCallUrlMatching,
} from './_serviceHelper';

test('getFeaturedGames', t => {
  client.featuredGames.getFeaturedGames(noop);
  shouldCallUrlMatching('/observer-mode/rest/featured', t);
});
