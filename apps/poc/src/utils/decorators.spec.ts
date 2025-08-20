import { id } from './decorators';

describe('id', () => {
  it('returns empty string for no names defined', () => {
    expect(id()).toEqual('');
  });
});
