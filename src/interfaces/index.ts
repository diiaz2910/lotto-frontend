export interface InputNumbersProps {
  title?: string;
  placeholderPrefix?: string;
  buttonText?: string;
  minNumber?: number;
  maxNumber?: number;
  onSubmit?: (numbers: number[]) => void;
}
