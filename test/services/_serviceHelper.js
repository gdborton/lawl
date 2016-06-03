import test from 'ava';
import Client from '../../src/Client';
import sinon from 'sinon';

export const apiKey = 'fakeapikey';
export const noop = () => {};
// Usually a bad idea to export mutable, but this is for convenience in testing :/
export let stubbedRequest; // eslint-disable-line import/no-mutable-exports
export let client; // eslint-disable-line import/no-mutable-exports

export function shouldCallUrlMatching(path, t) {
  t.truthy(stubbedRequest.called);
  const calledUrl = stubbedRequest.firstCall.args[0];
  const callback = stubbedRequest.firstCall.args[1];
  const qs = path.indexOf('?') === -1 ? '?' : '&';
  t.is(calledUrl, `https://na.api.pvp.net${path}${qs}api_key=${apiKey}`);
  t.is(callback, noop);
}

test.beforeEach(() => {
  stubbedRequest = sinon.stub(Client.prototype, 'executeRequest');
  client = new Client({
    region: 'na',
    apiKey,
  });
});

test.afterEach.always(() => {
  stubbedRequest.restore();
});
