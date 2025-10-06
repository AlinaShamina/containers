import Team from './team/Team';

const team = new Team();

const character1 = { name: 'Ivan', type: 'Archer' };
const character2 = { name: 'Oleg', type: 'Warrior' };
const character3 = { name: 'Oleg', type: 'Warrior' };

try {
  team.add(character1);
  team.add(character2);
  team.add(character1);
} catch (e) {
  // eslint-disable-next-line no-console
  console.warn(e.message);
}

team.addAll(character1, character2, character3);

const membersArray = team.toArray();

// eslint-disable-next-line no-console
console.log('Команда:', membersArray);
