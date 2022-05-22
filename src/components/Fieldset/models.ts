export interface IFieldsetProps {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  className?: string;
  onClick?: () => void;
}
