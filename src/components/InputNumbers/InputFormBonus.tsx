import { useState } from "react";
import { useMutation } from "@apollo/client";
import { TextInput, Button, Grid, GridCol } from "@mantine/core";

// queries
import { CREATE_BONUS } from "../../queries/mutations";

// interfaces
import { InputNumbersProps } from "../../interfaces/index";

// styles
import styles from "../Styles/InputNumbers.module.css";

export function InputFormBonus({
  title = "Bonus",
  placeholderPrefix = "N",
  buttonText = "Submit",
  minNumber = 1,
  maxNumber = 40,
  onSubmit,
}: InputNumbersProps) {
  const [numbers, setNumbers] = useState<number[]>(Array(1).fill(0));
  const [createBonus] = useMutation(CREATE_BONUS);

  const handleChange = (index: number, value: string) => {
    const num = parseInt(value, 10);
    const newNumbers = [...numbers];
    newNumbers[index] = isNaN(num) ? 0 : num;
    setNumbers(newNumbers);
  };

  const handleSubmit = async () => {
    if (numbers.some((num) => num < 1 || num > 40)) {
      alert("Numbers must be between 1 and 40.");
    } else {
      try {
        await createBonus({ variables: { numbers } });
        alert(`Submitted numbers: ${numbers}`);
        setNumbers(Array(1).fill(0));
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
      <h1 className={styles.title}>{title}</h1>
      <Grid>
        {numbers.map((number, index) => (
          <GridCol span={12} key={index}>
            <TextInput
              placeholder={`${placeholderPrefix} ${index + 1}`}
              value={number === 0 ? "" : number.toString()}
              onChange={(event) =>
                handleChange(index, event.currentTarget.value)
              }
              type="number"
              min={minNumber}
              max={maxNumber}
              className={styles.input}
            />
          </GridCol>
        ))}
      </Grid>
      <Button onClick={handleSubmit} className={styles.button}>
        {buttonText}
      </Button>
    </div>
  );
}

export default InputFormBonus;
