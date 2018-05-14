import Fighter from "./Fighter.js";
import ImprovedFighter from "./ImprovedFighter.js";

let fighter = new Fighter("Tesst", 232323, 232323);
let fighter2 = new ImprovedFighter("Tesst22", 1233, 1231);

fighter2.setDamage(123);

document.write(`${fighter2.health}<br>`);