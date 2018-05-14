class Fighter {
    constructor(name, power, health) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health -= damage;
    }

    hit(enemy, point = 1) {
        let damage = point * this.power;
        enemy.setDamage(damage);
        console.log(`${this.name}[${this.health}]  ==(${damage})==>  ${enemy.name}[${enemy.health}]`);
    }
}

export default Fighter;