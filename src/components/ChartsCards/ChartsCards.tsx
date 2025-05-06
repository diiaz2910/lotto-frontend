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
    .filter((chart) => chart.name === "paresz")
    .reduce(
      (prev, current) => (prev.index > current.index ? prev : current),
      {} as Chart
    );

  // Filtrar gráficos para el nombre 'chart1'
  const chart1 = charts
    .filter((chart) => chart.name === "trio")
    .reduce(
      (prev, current) => (prev.index > current.index ? prev : current),
      {} as Chart
    );

  // filtrar graficos para el nombre 'chart2'
  const chart2 = charts
    .filter((chart) => chart.name === "heat")
    .reduce(
      (prev, current) => (prev.index > current.index ? prev : current),
      {} as Chart
    );

  // filtrar graficos para el nombre 'graphNetwork'
  const chart3 = charts
    .filter((chart) => chart.name === "graph_network_top10")
    .reduce(
      (prev, current) => (prev.index > current.index ? prev : current),
      {} as Chart
    );

  return (
    <Container my="lg">
      <div>
        <h1>Charts</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sint
          assumenda officiis, ex qui maxime corrupti, maiores consectetur sequi
          quo consequatur eos, cum commodi dolorem pariatur debitis facilis
          quod. Soluta?
        </p>
      </div>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
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
                height={200}
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

        {chart2 && (
          <Card
            key={chart2._id}
            withBorder
            padding="lg"
            radius="md"
            className={classes.card}
          >
            <Card.Section mb="sm">
              <Image
                src={chart2.imageUrl}
                alt={chart2.description}
                height={400}
              />
            </Card.Section>

            <Text fw={700} className={classes.title} mt="xs">
              {chart2.description}
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

        {chart3 && (
          <Card
            key={chart3._id}
            withBorder
            padding="lg"
            radius="md"
            className={classes.card}
          >
            <Card.Section mb="sm">
              <Image
                src={chart3.imageUrl}
                alt={chart3.description}
                height={300}
              />
            </Card.Section>

            <Text fw={700} className={classes.title} mt="xs">
              {chart3.description}
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
