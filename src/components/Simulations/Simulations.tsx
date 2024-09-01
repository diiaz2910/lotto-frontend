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

// utils
import { sortData } from "../../utils/searchAndSort";
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
    if (data && data.getSimulations) {
      const simulations = data.getSimulations.slice(0, 5); // Limita a 5 resultados
      setSortedData(simulations);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const setSorting = (field: SortFields) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(
      sortData(data.getSimulations, { sortBy: field, reversed, search })
    );
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data.getSimulations, {
        sortBy,
        reversed: reverseSortDirection,
        search: value,
      })
    );
  };

  const rows = sortedData.map((row, index) => (
    <Table.Tr key={index}>
      <Table.Td>{row.numbers.join(", ")}</Table.Td>
      <Table.Td>{row.method}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container my="md">
      <div>
        <h1>1000 vs One</h1>
        <h6>
          <Lotto />
        </h6>
      </div>
      <SimpleGrid cols={{ base: 1, sm: 1 }} spacing="md">
        <ScrollArea style={{ height: 200 }}>
          <TextInput
            placeholder="Search"
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
