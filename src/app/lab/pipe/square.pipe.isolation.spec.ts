import { SquarePipeForLab } from './square.pipe';

describe('1-square pipe (isolation) testing:', () => {
  let SquarePipe: SquarePipeForLab;

  beforeEach(() => {
    SquarePipe = new SquarePipeForLab();
  });

  it('should return 16 when passing 4', () => {
    const result = SquarePipe.transform(4);
    expect(result).toBe(16);
  });

  it('should return "Not a number" when passing a non-numeric value', () => {
    const result = SquarePipe.transform('string');
    expect(result).toBe('Not a number');
  });
});
