export const password = (): string => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const specialCharacters = "±!@#$%^&*()_+-=§£™¡¢∞§¶•ªº–≠";

  const all = letters
    .concat(capitals)
    .concat(numbers)
    .concat(specialCharacters);

  return all;
};
