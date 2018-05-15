export default function fight(fighter, improvedFighter, ...point) {
  const points = [...point];
  // iterator
  let i = 0;

  console.log(`>>> ${fighter.name} vs ${improvedFighter.name} <<<`);

  while (fighter.health > 0 && improvedFighter.health > 0 && i < points.length) {
    if (i % 2 === 0) {
      fighter.hit(improvedFighter, points[i]);
    } else {
      improvedFighter.doubleHit(fighter, points[i]);
    }

    i++;
  }

  if (fighter.health < 0) {
    console.log(`Figher "${improvedFighter.name}" wins. Gratz \n`);
  } else if (improvedFighter.health < 0) {
    console.log(`Figher "${fighter.name}" wins. Gratz \n`);
  } else {
    console.log(`Tie between ${fighter.name} vs ${improvedFighter.name}. All participant fought well \n`);
  }
}