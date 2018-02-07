import calculateWinner from '../calculateWinner';

describe('The winner should be', () => {
  it('nobody because its a draw', () => {
    const squares = [
      'X', 'O', 'X',
      'O', 'O', 'X',
      'O', 'X', 'O',
    ];
    expect(calculateWinner(squares)).toBeFalsy();
  });
  it('nobody because the game has not finished', () => {
    const squares = [
      null, 'O', 'X',
      'O', null, 'X',
      'O', 'X', null,
    ];
    expect(calculateWinner(squares)).toBeFalsy();
  });
  it('X horizontally - all three rows', () => {
    const squares1 = [
      'X', 'X', 'X',
      null, null, null,
      null, null, null,
    ];
    expect(calculateWinner(squares1)).toBe('X');
    const squares2 = [
      null, null, null,
      null, null, null,
      'X', 'X', 'X',
    ];
    expect(calculateWinner(squares2)).toBe('X');
    const squares3 = [
      null, null, null,
      'X', 'X', 'X',
      null, null, null,
    ];
    expect(calculateWinner(squares3)).toBe('X');
  });
  it('O vertically - all three columns', () => {
    const squares1 = [
      'O', null, null,
      'O', null, null,
      'O', null, null,
    ];
    expect(calculateWinner(squares1)).toBe('O');
    const squares2 = [
      null, 'O', null,
      null, 'O', null,
      null, 'O', null,
    ];
    expect(calculateWinner(squares2)).toBe('O');
    const squares3 = [
      null, null, 'O',
      null, null, 'O',
      null, null, 'O',
    ];
    expect(calculateWinner(squares3)).toBe('O');
  });
  it('X diagonally - top left to bottom right', () => {
    const squares = [
      'X', 'O', 'X',
      'O', 'X', 'X',
      'O', 'X', 'X',
    ];
    expect(calculateWinner(squares)).toBe('X');
  });
  it('O diagonally - bottom left to top right', () => {
    const squares = [
      'X', 'O', 'O',
      'O', 'O', 'X',
      'O', 'X', 'O',
    ];
    expect(calculateWinner(squares)).toBe('O');
  });
});
