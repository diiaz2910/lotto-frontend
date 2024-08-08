import { Container, Card, SimpleGrid, rem } from "@mantine/core";

// components
import Lotto from "../ItemsList/Lotto";
import Bonus from "../ItemsList/Bonus";
import PowerBall from "../ItemsList/Powerball";
import Strike from "../ItemsList/Strike";

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid() {
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Card shadow="xl" radius="md" style={{ height: PRIMARY_COL_HEIGHT }}>
          <Lotto />
        </Card>
        <Card shadow="xl" radius="md" style={{ height: PRIMARY_COL_HEIGHT }}>
          <Bonus />
        </Card>
        <Card shadow="xl" radius="md" style={{ height: PRIMARY_COL_HEIGHT }}>
          <PowerBall />
        </Card>
        <Card shadow="xl" radius="md" style={{ height: PRIMARY_COL_HEIGHT }}>
          <Strike />
        </Card>
      </SimpleGrid>
    </Container>
  );
}

export default LeadGrid;
