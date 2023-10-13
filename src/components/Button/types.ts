export type ButtonVariants = 'primary' | 'secondary';

export interface ButtonProps {
  text: string;
  onPress: () => void;
  disabeld?: boolean;
  variant?: ButtonVariants;
  loading?: boolean;
}
