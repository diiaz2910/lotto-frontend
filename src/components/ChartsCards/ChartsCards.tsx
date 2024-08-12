import { Card, Image, Group, Text, Container, SimpleGrid } from "@mantine/core";
import { useQuery } from "@apollo/client";

// queries
import { GET_LAST_CHART } from "../../queries/queries";

// interfaces
import { Chart } from "../../interfaces";

// styles
import classes from "./ChartsCards.module.css";

export function ChartsCards() {
  //const theme = useMantineTheme();
  const { loading, error, data } = useQuery<{ getLastChart: Chart }>(
    GET_LAST_CHART,
    { variables: { name: "chart1" } }
  );

  if (error) {
    return <p>Error</p>;
  }
  if (!data || !data.getLastChart) {
    return <p>No data</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const chart = data.getLastChart;

  return (
    <Container my="md">
      <div>
        <h1>Charts</h1>
      </div>
      <SimpleGrid cols={{ base: 2, sm: 2 }} spacing="md">
        <Card
          key={chart._id}
          withBorder
          padding="lg"
          radius="md"
          className={classes.card}
        >
          <Card.Section mb="sm">
            <Image src={chart.imageUrl} alt={chart.description} height={300} />
          </Card.Section>

          <Text fw={700} className={classes.title} mt="xs">
            {chart.description}
          </Text>

          <Card.Section className={classes.footer}>
            <Group justify="space-between">
              <Text fz="xs" c="dimmed">
                Chart from Google Colab Notebook
              </Text>
            </Group>
          </Card.Section>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
