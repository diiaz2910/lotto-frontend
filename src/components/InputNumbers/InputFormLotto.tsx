import { useState } from "react";
import { useMutation } from "@apollo/client";
import { TextInput, Button, Grid, Flex } from "@mantine/core";

// queries
import { CREATE_COMBINATION } from "../../queries/mutations";

// interfaces
import { InputNumbersProps } from "../../interfaces/index";

// utils
import { distributeNumbers } from "../../utils/parseNumbers";

// styles
import styles from "../Styles/InputNumbers.module.css";

export function InputFormLotto({
  title = "Lotto",
  placeholderPrefix = "N",
  buttonText = "Submit",
  minNumber = 1,
  maxNumber = 40,
  onSubmit,
}: InputNumbersProps) {
  const [numbers, setNumbers] = useState<number[]>(Array(6).fill(0));
  const [createCombination] = useMutation(CREATE_COMBINATION);

  const handleChange = (index: number, value: string) => {
    const cleanValue = value.replace(/[^0-9]/g, "");

    if (cleanValue.length > 2) {
      const updated = distributeNumbers(value, index, numbers);
      setNumbers(updated);
    } else {
      const num = parseInt(cleanValue, 10);
      const newNumbers = [...numbers];
      newNumbers[index] = isNaN(num) ? 0 : num;
      setNumbers(newNumbers);
    }
  };

  const handleSubmit = async () => {
    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== 6) {
      alert("All numbers must be unique.");
    } else if (numbers.some((num) => num < 1 || num > 40)) {
      alert("Numbers must be between 1 and 40.");
    } else {
      try {
        await createCombination({ variables: { numbers } });
        alert(`Submitted numbers: ${numbers.join(", ")}`);
        setNumbers(Array(6).fill(0)); // Reset the input fields
        if (onSubmit) {
          onSubmit(numbers);
        }
      } catch (error) {
        console.error(error);
        alert("Error submitting numbers. Please try again.");
      }
    }
  };

  return (
    <div>
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
    </div>
  );
}

export default InputFormLotto;
