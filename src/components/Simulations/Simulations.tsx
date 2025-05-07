import { useState, useEffect } from "react";
import {
  Container,
  SimpleGrid,
  ScrollArea,
  TextInput,
  Table,
  Text,
  rem,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useQuery } from "@apollo/client";

// queries
import { GET_SIMULATIONS } from "../../queries/queries";

// enums
import { SortFields } from "../../enums/SortFields";

// components
import { Th } from "./Th";
import Lotto from "../ItemsList/Lotto";

// interfaces
import { RowData } from "../../interfaces";

export function Simulations() {
  const { loading, error, data } = useQuery(GET_SIMULATIONS);
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState<RowData[]>([]);
  const [sortBy, setSortBy] = useState<SortFields | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  useEffect(() => {
    if (data?.getSimulations) {
      setSortedData(data.getSimulations.slice(0, 5));
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const setSorting = (field: SortFields) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    // Sorting sin aplicar búsqueda (para mantener comportamiento anterior si se desea)
    const sorted = [...data.getSimulations].sort((a, b) => {
      if (field === SortFields.METHOD) {
        return reversed
          ? b.method.localeCompare(a.method)
          : a.method.localeCompare(b.method);
      } else {
        return reversed
          ? b.numbers.length - a.numbers.length
          : a.numbers.length - b.numbers.length;
      }
    });
    setSortedData(sorted);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.currentTarget;

    // 1) Eliminar todo menos dígitos
    value = value.replace(/[^0-9]/g, "");

    // 2) Agrupar cada 2 dígitos e insertar comas
    const groups = value.match(/.{1,2}/g);
    value = groups ? groups.join(",") : "";
    setSearch(value);

    // Convertir a array de números
    const searchNumbers = value
      .split(",")
      .map((n) => parseInt(n, 10))
      .filter((n) => !isNaN(n));

    // Ordenar por cantidad de coincidencias con searchNumbers (de mayor a menor)
    const sorted = [...data.getSimulations].sort((a, b) => {
      const aMatches = a.numbers.filter((n: number) =>
        searchNumbers.includes(n)
      ).length;
      const bMatches = b.numbers.filter((n: number) =>
        searchNumbers.includes(n)
      ).length;
      return bMatches - aMatches;
    });

    setSortedData(sorted);
  };

  const rows = sortedData.map((row, idx) => (
    <Table.Tr key={idx}>
      <Table.Td>{row.numbers.join(", ")}</Table.Td>
      <Table.Td>{row.method}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container my="md">
      <div>
        <h1>1000 vs One</h1>
        <p>
          Esta herramienta te permite comparar 100 combinaciones numéricas
          generadas mediante diferentes técnicas de predicción con el resultado
          más reciente de la lotería, facilitando el análisis de qué métodos se
          acercan más al número ganador.
        </p>
        <h6>
          <Lotto />
        </h6>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 1 }} spacing="md">
        <ScrollArea style={{ height: 300 }}>
          <TextInput
            placeholder="Search (ej: 17,29)"
            mb="md"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            value={search}
            onChange={handleSearchChange}
          />

          <Table
            horizontalSpacing="md"
            verticalSpacing="xs"
            miw={700}
            layout="fixed"
          >
            <Table.Thead>
              <Table.Tr>
                <Th
                  sorted={sortBy === SortFields.NUMBERS}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting(SortFields.NUMBERS)}
                >
                  Numbers
                </Th>
                <Th
                  sorted={sortBy === SortFields.METHOD}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting(SortFields.METHOD)}
                >
                  Method
                </Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {rows.length > 0 ? (
                rows
              ) : (
                <Table.Tr>
                  <Table.Td colSpan={2}>
                    <Text fw={500} ta="center">
                      Nothing found
                    </Text>
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </SimpleGrid>
    </Container>
  );
}

export default Simulations;
