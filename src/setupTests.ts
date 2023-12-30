/* eslint-disable import/no-extraneous-dependencies */
import server from './mocks/server';
import '@testing-library/jest-dom';
import 'whatwg-fetch';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
