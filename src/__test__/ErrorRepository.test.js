import ErrorRepository from '../errors/ErrorRepository';

describe('ErrorRepository', () => {
  test('returns correct error message', () => {
    const repo = new ErrorRepository();
    expect(repo.translate(100)).toBe('Not Found');
  });

  test('returns Unknown error for unknown code', () => {
    const repo = new ErrorRepository();
    expect(repo.translate(999)).toBe('Unknown error');
  });
});
