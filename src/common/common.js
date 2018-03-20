/**
 * Return the result of a - b to use at sort method
 * @param {object} itemA
 * @param {object} itemB
 */
export function byWeight (itemA, itemB) {
  return itemA.weight - itemB.weight
}
