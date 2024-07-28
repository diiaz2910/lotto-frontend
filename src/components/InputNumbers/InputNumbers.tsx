import React, { useState } from "react";
import { Container, TextInput, Button, Grid, Flex } from "@mantine/core";

// interfaces
import { InputNumbersProps } from "../../interfaces/index";

// styles
import styles from "../Styles/InputNumbers.module.css";

function InputNumbers({
  title = "Enter Your Numbers",
  placeholderPrefix = "N",
  buttonText = "Submit",
  minNumber = 1,
  maxNumber = 40,
  onSubmit,
}: InputNumbersProps) {
  const [numbers, setNumbers] = useState<number[]>(Array(6).fill(0));

  const handleChange = (index: number, value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      const newNumbers = [...numbers];
      newNumbers[index] = num;
      setNumbers(newNumbers);
    }
  };

  const handleSubmit = () => {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      alert("All numbers must be unique.");
    } else if (numbers.some((num) => num < minNumber || num > maxNumber)) {
      alert(`Numbers must be between ${minNumber} and ${maxNumber}.`);
    } else {
      alert(`Submitted numbers: ${numbers.join(", ")}`);
      if (onSubmit) {
        onSubmit(numbers);
      }
      // Pending to feed server.
    }
  };

  return (
    <Container className={styles.container}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        className={styles.flex}
      >
        <h1 className={styles.title}>{title}</h1>
        <Grid>
          {numbers.map((number, index) => (
            <Grid.Col span={4} key={index}>
              <TextInput
                placeholder={`${placeholderPrefix}${index + 1}`}
                value={number === 0 ? "" : number.toString()}
                onChange={(event) =>
                  handleChange(index, event.currentTarget.value)
                }
                type="number"
                min={minNumber}
                max={maxNumber}
                className={styles.input}
              />
            </Grid.Col>
          ))}
        </Grid>
        <Button mt="md" onClick={handleSubmit} className={styles.button}>
          {buttonText}
        </Button>
      </Flex>
    </Container>
  );
}

export default InputNumbers;
