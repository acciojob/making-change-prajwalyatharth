const makeChange = (c) => {
  // your name here
	const makeChange = (c) => {
  const result = {};

  // Quarters (25 cents)
  result.q = Math.floor(c / 25);
  c = c % 25; // Remainder after using quarters

  // Dimes (10 cents)
  result.d = Math.floor(c / 10);
  c = c % 10; // Remainder after using dimes

  // Nickels (5 cents)
  result.n = Math.floor(c / 5);
  c = c % 5; // Remainder after using nickels

  // Pennies (1 cent)
  result.p = c; // The remaining cents are the number of pennies

  return result;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(Number(c))));

};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
