export const password = (limit =16): string => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const specialCharacters = "!@#$%&*()_+-=";
  const all = letters
    .concat(capitals)
    .concat(numbers)
    .concat(specialCharacters);
  const result: Array<string> = [];

  const length = limit;

  for (let i = 0; i < length + 1; i++) {
    result.push(all.charAt(Math.floor(Math.random() * all.length)));
  }

  return result.join("");
};
