import { RowData } from "../interfaces";
import { SortFields } from "../enums/SortFields";

// Función de filtrado
export function filterData(data: RowData[], search: string): RowData[] {
  const queries = search.split(",").map((query) => query.trim());

  return data.filter((item) => {
    return queries.every(
      (query) =>
        item.method.toLowerCase().includes(query.toLowerCase()) ||
        item.numbers.some((num) => num.toString().includes(query))
    );
  });
}

// Función de ordenación
export function sortData(
  data: RowData[],
  payload: { sortBy: SortFields | null; reversed: boolean; search: string }
): RowData[] {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  const sorted = [...data].sort((a, b) => {
    if (sortBy === SortFields.METHOD) {
      const aMethod = a.method.toLowerCase();
      const bMethod = b.method.toLowerCase();

      return payload.reversed
        ? bMethod.localeCompare(aMethod)
        : aMethod.localeCompare(bMethod);
    } else if (sortBy === SortFields.NUMBERS) {
      const aNumbers = a.numbers.join(", ");
      const bNumbers = b.numbers.join(", ");

      return payload.reversed
        ? bNumbers.localeCompare(aNumbers)
        : aNumbers.localeCompare(bNumbers);
    }

    return 0; // Valor por defecto
  });

  return filterData(sorted, payload.search);
}
