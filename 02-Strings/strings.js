function reverse(str) {
  // check input
  if (typeof str !== "string" || str.length < 2 || !str) {
    return str;
  }

  // [0] create empty var
  let reversed = "";
  // [1] loop over the str from right to left
  for (let i = str.length - 1; i >= 0; i--) {
    // [2] and concat to reversed var
    reversed += str[i];
  }

  return reversed;
}

console.log(reverse("I love you"));
