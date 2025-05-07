export function distributeNumbers(
  rawValue: string,
  startIndex: number,
  currentNumbers: number[],
  chunkSize: number = 2
): number[] {
  const cleanValue = rawValue.replace(/[^0-9]/g, "");
  const chunks = cleanValue.match(new RegExp(`.{1,${chunkSize}}`, "g")) ?? [];
  const newNumbers = [...currentNumbers];

  for (
    let i = 0;
    i < chunks.length && startIndex + i < newNumbers.length;
    i++
  ) {
    const num = parseInt(chunks[i], 10);
    newNumbers[startIndex + i] = isNaN(num) ? 0 : num;
  }

  return newNumbers;
}
