export type GuestType = 'adult' | 'child';

export interface Guest {
  id: number;
  name: string;
  isConfirmed: boolean;
  type: GuestType;
}

export interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
}