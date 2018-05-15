export default function fight(fighter, improvedFighter, ...point) {
  const points = [...point];
  // iterators
  let i = 0;
  let k = 0;

  console.log(`>>> ${fighter.name} vs ${improvedFighter.name} <<<`);

  // just to use an arrow function ˙ ͜ʟ˙
  let turn = func => func();

  while (fighter.health > 0 && improvedFighter.health > 0 && i < points.length) {
    if (k % 2 === 0) {
      turn(fighter.hit.bind(fighter, improvedFighter, points[i]));
      k++;
      continue;
    }

    turn(improvedFighter.doubleHit.bind(improvedFighter, fighter, points[i]));
    k++;
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