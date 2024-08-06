import { Container, Card, SimpleGrid, rem } from "@mantine/core";

// component
import Lotto from "../ItemsList/Lotto";

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid() {
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Card shadow="xl" radius="md" style={{ height: PRIMARY_COL_HEIGHT }}>
          <Lotto />
        </Card>
        <Card shadow="xl" radius="md" style={{ height: PRIMARY_COL_HEIGHT }}>
          <Lotto />
        </Card>
        <Card shadow="xl" radius="md" style={{ height: PRIMARY_COL_HEIGHT }}>
          <Lotto />
        </Card>
        <Card shadow="xl" radius="md" style={{ height: PRIMARY_COL_HEIGHT }}>
          <Lotto />
        </Card>
      </SimpleGrid>
    </Container>
  );
}

export default LeadGrid;
