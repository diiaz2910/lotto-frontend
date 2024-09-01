export interface InputNumbersProps {
  title?: string;
  placeholderPrefix?: string;
  buttonText?: string;
  minNumber?: number;
  maxNumber?: number;
  onSubmit?: (numbers: number[]) => void;
}

export interface Chart {
  _id: string;
  imageUrl: string;
  description: string;
  index: number;
  name: string;
}

export interface RowData {
  numbers: number[];
  method: string;
}

export interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}
