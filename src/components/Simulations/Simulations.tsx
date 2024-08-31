import { useState, useEffect } from "react";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  Container,
  SimpleGrid,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";
import { useQuery } from "@apollo/client";

// Components

// Queries
import { GET_SIMULATIONS } from "../../queries/queries";

// Styles
import classes from "./Simulations.module.css";

interface RowData {
  numbers: number[];
  method: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const queries = search.split(",").map((query) => query.trim());

  return data.filter((item) => {
    return queries.every(
      (query) =>
        item.method.toLowerCase().includes(query.toLowerCase()) ||
        item.numbers.some((num) => num.toString().includes(query))
    );
  });
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (sortBy === "method") {
        const aMethod = a[sortBy].toLowerCase();
        const bMethod = b[sortBy].toLowerCase();

        if (payload.reversed) {
          return bMethod.localeCompare(aMethod);
        }
        return aMethod.localeCompare(bMethod);
      } else if (sortBy === "numbers") {
        const aNumbers = a[sortBy].join(", ");
        const bNumbers = b[sortBy].join(", ");

        if (payload.reversed) {
          return bNumbers.localeCompare(aNumbers);
        }
        return aNumbers.localeCompare(bNumbers);
      }

      return 0; // Default return value if sortBy is null
    }),
    payload.search
  );
}

export function Simulations() {
  const { loading, error, data } = useQuery(GET_SIMULATIONS);
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState<RowData[]>([]);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  useEffect(() => {
    if (data && data.getSimulations) {
      const simulations = data.getSimulations.slice(0, 5); // Limita a 5 resultados
      setSortedData(simulations);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const setSorting = (field: keyof RowData) => {
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
        <h1>1000 vs One - August - 31 - 2024</h1>
        {/* <h6>
          <Lotto />
        </h6> */}
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
            <Table.Tbody>
              <Table.Tr>
                <Th
                  sorted={sortBy === "numbers"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("numbers")}
                >
                  Numbers
                </Th>
                <Th
                  sorted={sortBy === "method"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("method")}
                >
                  Method
                </Th>
              </Table.Tr>
            </Table.Tbody>
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
