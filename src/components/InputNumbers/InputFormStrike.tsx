import { useState } from "react";
import { useMutation } from "@apollo/client";
import { TextInput, Button, Grid, Flex } from "@mantine/core";

// queries
import { CREATE_STRIKE } from "../../queries/mutations";

// interfaces
import { InputNumbersProps } from "../../interfaces/index";

// utils
import { distributeNumbers } from "../../utils/parseNumbers";

// styles
import styles from "../Styles/InputNumbers.module.css";

export function InputFormStrike({
  title = "Strike",
  placeholderPrefix = "N",
  buttonText = "Submit",
  minNumber = 1,
  maxNumber = 40,
  onSubmit,
}: InputNumbersProps) {
  const [numbers, setNumbers] = useState<number[]>(Array(4).fill(0));
  const [createStrike] = useMutation(CREATE_STRIKE);

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

    /*
    const num = parseInt(value, 10);
    const newNumbers = [...numbers];
    newNumbers[index] = isNaN(num) ? 0 : num;
    setNumbers(newNumbers);
    */
  };

  const handleSubmit = async () => {
    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== 4) {
      alert("All numbers must be unique.");
    } else if (numbers.some((num) => num < 1 || num > 40)) {
      alert("Numbers must be between 1 and 40.");
    } else {
      try {
        await createStrike({ variables: { numbers } });
        alert(`Submitted numbers: ${numbers.join(", ")}`);
        setNumbers(Array(4).fill(0));
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
            <Grid.Col span={6} key={index}>
              <TextInput
                key={index}
                placeholder={`${placeholderPrefix}${index + 1}`}
                value={number === 0 ? "" : number}
                onChange={(event) =>
                  handleChange(index, event.currentTarget.value)
                }
                min={minNumber}
                max={maxNumber}
                type="number"
                required
              />
            </Grid.Col>
          ))}
        </Grid>
        <Button onClick={handleSubmit} className={styles.button}>
          {buttonText}
        </Button>
      </Flex>
    </div>
  );
}

export default InputFormStrike;
