import { Card, Image, Group, Text, Container, SimpleGrid } from "@mantine/core";
import { useQuery } from "@apollo/client";

// queries
import { GET_CHART } from "../../queries/queries";

// interfaces
import { Chart } from "../../interfaces";

// styles
import classes from "./ChartsCards.module.css";

export function ChartsCards() {
  const { loading, error, data } = useQuery<{ getCharts: Chart[] }>(GET_CHART);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  if (!data || !data.getCharts) {
    return <p>No data</p>;
  }

  // Filtrar y obtener gráficos por nombre e índice máximo
  const charts = data.getCharts;

  // Filtrar gráficos para el nombre 'Frequency'
  const frequencyChart = charts
    .filter((chart) => chart.name === "frequency_chart1")
    .reduce(
      (prev, current) => (prev.index > current.index ? prev : current),
      {} as Chart
    );

  // Filtrar gráficos para el nombre 'chart1'
  const chart1 = charts
    .filter((chart) => chart.name === "probability")
    .reduce(
      (prev, current) => (prev.index > current.index ? prev : current),
      {} as Chart
    );

  return (
    <Container my="md">
      <div>
        <h1>Charts</h1>
      </div>
      <SimpleGrid cols={{ base: 2, sm: 2 }} spacing="md">
        {frequencyChart && (
          <Card
            key={frequencyChart._id}
            withBorder
            padding="lg"
            radius="md"
            className={classes.card}
          >
            <Card.Section mb="sm">
              <Image
                src={frequencyChart.imageUrl}
                alt={frequencyChart.description}
                height={300}
              />
            </Card.Section>

            <Text fw={700} className={classes.title} mt="xs">
              {frequencyChart.description}
            </Text>

            <Card.Section className={classes.footer}>
              <Group justify="space-between">
                <Text fz="xs" c="dimmed">
                  Chart from Google Colab Notebook
                </Text>
              </Group>
            </Card.Section>
          </Card>
        )}

        {chart1 && (
          <Card
            key={chart1._id}
            withBorder
            padding="lg"
            radius="md"
            className={classes.card}
          >
            <Card.Section mb="sm">
              <Image
                src={chart1.imageUrl}
                alt={chart1.description}
                height={300}
              />
            </Card.Section>

            <Text fw={700} className={classes.title} mt="xs">
              {chart1.description}
            </Text>

            <Card.Section className={classes.footer}>
              <Group justify="space-between">
                <Text fz="xs" c="dimmed">
                  Chart from Google Colab Notebook
                </Text>
              </Group>
            </Card.Section>
          </Card>
        )}
      </SimpleGrid>
    </Container>
  );
}
