import type { Dispatch, SetStateAction, ReactNode } from 'react';

export type ViewState = '' | 'options' | 'newDeck' | 'import' | 'settings';

export interface IconBtnProp {
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  className?: string;
}

export interface CreateMoreMasterProp{
  showCreateModal: boolean;
  setShowCreateModal: Dispatch<SetStateAction<boolean>>;
}

export interface CreateMoreOptionItemProp{
  id?: number;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  description?: string;
}

export interface CreateMoreOptionsProp{
  options: CreateMoreOptionItemProp[]
}