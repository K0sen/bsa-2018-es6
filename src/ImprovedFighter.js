import Fighter from "./Fighter.js";

class ImprovedFighter extends Fighter {
    constructor(name, power, health) {
        super(name, power, health);
    }

    doubleHit(enemy, point) {
        super.hit(enemy, point * 2);
    }
}

export default ImprovedFighter;