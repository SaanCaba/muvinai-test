export function parseDate(input: string): Date {
  const parts = input.split("/");
  let date;
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);

    date = new Date(year, month, day);
  }
  return date as Date;
}
