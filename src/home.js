import uniq from "lodash/uniq";
import { doStuff } from "./utils/utils";
import { secureThingo } from "./theme/secure";

console.log("HOME", secureThingo());
console.log("helloworld", uniq([]), doStuff());
