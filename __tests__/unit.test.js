// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber truthy 1', () => {
  // just gotta figure out what the 555 actually is to contact me ;D
  expect(functions.isPhoneNumber('(760)555-9039')).toBe(true);
});
test('isPhoneNumber truthy 2', () => {
  // just gotta figure out what the 555 actually is to contact me ;D
  expect(functions.isPhoneNumber('760-555-9039')).toBe(true);
});
test('isPhoneNumber falsy 1', () => {
  expect(functions.isPhoneNumber('Bob Barker')).toBe(false);
});
test('isPhoneNumber falsy 2', () => {
  expect(functions.isPhoneNumber('99999999999')).toBe(false);
});

test('isEmail truthy 1', () => {
  expect(functions.isEmail('asunjic@ucsd.edu')).toBe(true);
});
test('isEmail truthy 2', () => {
  expect(functions.isEmail('hello@gmail.com')).toBe(true);
});
test('isEmail falsy 1', () => {
  expect(functions.isEmail('Bob Barker')).toBe(false);
});
test('isEmail falsy 2', () => {
  expect(functions.isEmail('@gmail.com')).toBe(false);
});

test('isStrongPassword truthy 1', () => {
  expect(functions.isStrongPassword('asunjic_11')).toBe(true);
});
test('isStrongPassword truthy 2', () => {
  expect(functions.isStrongPassword('gregthegg__')).toBe(true);
});
test('isStrongPassword falsy 1', () => {
  expect(functions.isStrongPassword('1BobBarker')).toBe(false);
});
test('isStrongPassword falsy 2', () => {
  expect(functions.isStrongPassword('thesearentmyrealpasswordspleasedonttestthem')).toBe(false);
});

test('isDate truthy 1', () => {
  expect(functions.isDate('11/21/1986')).toBe(true);
});
test('isDate truthy 2', () => {
  expect(functions.isDate('2/2/2000')).toBe(true);
});
test('isDate falsy 1', () => {
  expect(functions.isDate('1312/31/11')).toBe(false);
});
test('isDate falsy 2', () => {
  expect(functions.isDate('13/3/111')).toBe(false);
});

test('isHexColor truthy 1', () => {
  expect(functions.isHexColor('#FF5733')).toBe(true);
});
test('isHexColor truthy 2', () => {
  expect(functions.isHexColor('#dF5733')).toBe(true);
});
test('isHexColor falsy 1', () => {
  expect(functions.isHexColor('##F5733')).toBe(false);
});
test('isHexColor falsy 2', () => {
  expect(functions.isHexColor('F5733#')).toBe(false);
});