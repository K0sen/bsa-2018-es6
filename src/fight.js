export default function fight(fighter, improvedFighter, ...point) {
  const points = [...point];
  // iterators
  let i = 0;
  let k = 0;

  while (fighter.health > 0 && improvedFighter.health > 0 && i < points.length) {
    if (k === 0) {
      fighter.hit(improvedFighter, points[i]);
      k++;
      continue;
    }

    improvedFighter.doubleHit(fighter, points[i]);
    k = 0;
    i++;
  }

  if (fighter.health < 0) {
    return `Figher "${improvedFighter.name}" wins. Gratz`;
  } else if (improvedFighter.health < 0) {
    return `Figher "${fighter.name}" wins. Gratz`;
  }

  return `Tie. All participant fought well`;
}