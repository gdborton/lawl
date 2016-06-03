import test from 'ava';
import {
  apiKey,
  noop,
  client,
  stubbedRequest,
  shouldCallUrlMatching,
} from './_serviceHelper';

test('getFeaturedGames', t => {
  client.featuredGames.getFeaturedGames(noop);
  shouldCallUrlMatching('/observer-mode/rest/featured', t);
});
