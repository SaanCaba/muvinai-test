export function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Sumar 1 ya que los meses son 0-indexados
  const year = date.getFullYear().toString();

  return `${day}/${month}/${year}`;
}
