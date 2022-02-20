export type setRowType = { set: string; reps: string; weight: string };
export type SetsRowProps = {
  index: number;
  handleRemoveSetClick: Function;
  handleInputChange: Function;
};

export type dropdownProps = {
  options: { label: string; value: string }[];
  label: string;
  selected: { label: string; value: string };
  onSelectedChange: Function;
};

export type InputProps = {
  name?: string;
  type: string;
  min?: string;
  placeholder?: string;
  handleInputChange?: Function;
  index?: number;
};

export type TitleProps = {
  text: string;
};

export type ButtonProps = {
  text: string;
  onClick: (e: any) => void;
};
