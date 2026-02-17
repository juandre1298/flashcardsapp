import type { ReactNode } from "react";

export interface UnderModalProp {
  label?: string;
  children?: ReactNode;
  show: boolean;
  onClose?: () => void;
}