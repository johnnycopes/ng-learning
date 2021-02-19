export function generateArray(num: number): number[] {
  return Array.from(Array(num), (_, i) => i + 1);
}
