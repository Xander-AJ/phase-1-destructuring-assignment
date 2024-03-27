const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');
const blackAndWhite = 'cow';
const black = 'sheep';
const pink = 'pig';

// Arrays
const [red, orange, yellow, green, blue, indigo, violet] = colors;
const [r, o, y, g, b, indg, v] = colors; // Corrected assignment for indigo

// Objects
const {
  muppetName,
  color,
  song,
  job,
  partner,
} = muppet;

const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;

module.exports = {
  moo,
  neigh,
  baa,
  oink,
  cluck,
  bessie,
  dolly,
  babe,
  little,
  blackAndWhite,
  black,
  pink,
  red,
  orange,
  yellow,
  green,
  blue,
  indigo,
  violet,
  r,
  o,
  y,
  g,
  b,
  indg, // Include indg in the module exports
  v,
  muppetName,
  color,
  song,
  job,
  partner,
  song2,
  song4,
  nestedJob,
  nestedPartner,
};
