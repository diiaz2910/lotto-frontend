import React from "react";
import { Container, SimpleGrid } from "@mantine/core";

// styles
import styles from "../Styles/InputNumbers.module.css";

import InputFormLotto from "./InputFormLotto";
import InputFormBonus from "./InputFormBonus";
import InputFormPowerBall from "./InputFormPowerBall";
import InputFormStrike from "./InputFormStrike";

const InputNumbers = () => {
  return (
    <Container className={styles.container}>
      <div>
        <h1>Update Results</h1>
      </div>
      {/* sm is a breakpoint within mantine responsive system. 2 columns on small screens and 4 columns on sm screens or higher */}
      <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="xl">
        <InputFormLotto />
        <InputFormBonus />
        <InputFormPowerBall />
        <InputFormStrike />
      </SimpleGrid>
    </Container>
  );
};

export default InputNumbers;
