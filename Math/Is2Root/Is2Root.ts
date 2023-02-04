/**
 *
 * @param {number} value - a numeric integer value
 */
const isPowerOf2 = (value: number) => (value & (value - 1)) === 0;

export default isPowerOf2;
