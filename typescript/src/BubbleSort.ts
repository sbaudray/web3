export function bubbleSort(list: Array<number>): Array<Number> {
  const clone = list.slice();

  let swapped = true;
  let passes = 0;

  while (swapped === true) {
    swapped = false;
    passes += 1;

    for (let i = 1; i <= clone.length - passes; i++) {
      let curr = clone[i];
      let prev = clone[i - 1];

      if (curr < prev) {
        swapped = true;
        clone[i] = prev;
        clone[i - 1] = curr;
      }
    }
  }

  return clone;
}
