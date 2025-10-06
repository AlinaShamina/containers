import Team from '../team/Team';

describe('Team', () => {
  test('add adds unique character', () => {
    const team = new Team();
    const char = { name: 'Legolas' };
    team.add(char);
    expect(team.toArray()).toContain(char);
  });

  test('add throws on duplicate character', () => {
    const team = new Team();
    const char = { name: 'Aragorn' };
    team.add(char);
    expect(() => team.add(char)).toThrow('Персонаж уже добавлен в команду');
  });

  test('addAll adds multiple characters, ignores duplicates', () => {
    const team = new Team();
    const a = { name: 'A' };
    const b = { name: 'B' };
    team.addAll(a, b, a);
    expect(team.toArray()).toHaveLength(2);
  });

  test('toArray returns array of members', () => {
    const team = new Team();
    const a = { name: 'A' };
    team.add(a);
    expect(Array.isArray(team.toArray())).toBe(true);
  });
});
