import console from "node:console";

export const fn = () => {
  return "Hello, world!";
};

export const main = fn;

console.log(main());
