import uniq from "lodash/uniq";
import { doStuff } from "./utils/utils";
import { secureThingo } from "./theme/secure";

console.log("hello world", secureThingo());
console.log("something else", uniq([]), doStuff());

const a = 1;
console.log(a);
