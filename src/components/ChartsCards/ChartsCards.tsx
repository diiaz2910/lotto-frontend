//import React, { useState } from "react";
import {
  Card,
  Image,
  Group,
  Text,
  useMantineTheme,
  Container,
  SimpleGrid,
} from "@mantine/core";
import { useQuery } from "@apollo/client";

// queries
import { GET_CHART } from "../../queries/queries";

// interfaces
import { Chart } from "../../interfaces";

// styles
import classes from "./ChartsCards.module.css";

export function ChartsCards() {
  const theme = useMantineTheme();
  const { loading, error, data } = useQuery<{ getCharts: Chart[] }>(GET_CHART);

  if (error) {
    return <p>Error</p>;
  }
  if (!data || !data.getCharts) {
    return <p>No data</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {data.getCharts.map((chart: Chart) => (
          <Card
            key={chart._id}
            withBorder
            padding="lg"
            radius="md"
            className={classes.card}
          >
            <Card.Section mb="sm">
              <Image
                src={chart.imageUrl}
                alt={chart.description}
                height={300}
              />
            </Card.Section>

            {/* <Badge w="fit-content" variant="light">
              decorations
            </Badge> */}

            <Text fw={700} className={classes.title} mt="xs">
              {chart.description}
            </Text>

            {/* <Group mt="lg">
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
                radius="sm"
              />
              <div>
                <Text fw={500}>Elsa Gardenowl</Text>
                <Text fz="xs" c="dimmed">
                  posted 34 minutes ago
                </Text>
              </div>
            </Group> */}

            <Card.Section className={classes.footer}>
              <Group justify="space-between">
                <Text fz="xs" c="dimmed">
                  Chart from Google Colab Notebook
                </Text>
                {/* <Group gap={0}>
                  <ActionIcon variant="subtle" color="gray">
                    <IconHeart
                      style={{ width: rem(20), height: rem(20) }}
                      color={theme.colors.red[6]}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon variant="subtle" color="gray">
                    <IconBookmark
                      style={{ width: rem(20), height: rem(20) }}
                      color={theme.colors.yellow[6]}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon variant="subtle" color="gray">
                    <IconShare
                      style={{ width: rem(20), height: rem(20) }}
                      color={theme.colors.blue[6]}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Group> */}
              </Group>
            </Card.Section>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
