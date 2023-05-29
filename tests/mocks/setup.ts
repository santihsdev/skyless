import { server } from './server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Clean up after the tests are finished.
afterAll(() => server.close());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
