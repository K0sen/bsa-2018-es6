import Fighter from "./Fighter.js";
import ImprovedFighter from "./ImprovedFighter.js";
import fight from "./fight.js";

let fighter1 = new Fighter("Luke", 5, 100);
let fighter2 = new ImprovedFighter("Darth Wader", 5, 100);

fight(fighter1, fighter2, 3, 4, 5, 19);

let fighter3 = new Fighter("Chip", 5, 100);
let fighter4 = new ImprovedFighter("Dale", 5, 100);

fight(fighter3, fighter4, 1, 2);

let fighter5 = new Fighter("Good", 5, 100);
let fighter6 = new ImprovedFighter("Evil", 5, 100);

fight(fighter5, fighter6);