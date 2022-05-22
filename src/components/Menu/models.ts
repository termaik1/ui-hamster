export type TElementItem = {
  icon: React.ReactNode;
  element: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

export interface IMenuProps {
  items: TElementItem[];
  className?: string;
}
