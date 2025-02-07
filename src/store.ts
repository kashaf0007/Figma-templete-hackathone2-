
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// Define product interface
interface CartItem {
    _id: string;
    imageUrl: string;
    name: string;
    category: string;
    discountPercent: string;
    price: number;
    priceWas?: string;
    rating: number;
    quantity: number;
    sizes: string[];
    colors: string[];
  }



export const cartAtom = atomWithStorage<CartItem[]>('cart', []);



export interface Billing{
  fullName: string;
  email: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
}

const initialBillingDetails:Billing  = {
  fullName: "",
  phoneNumber: "",
  email: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  
}

export const customerFormDetails = atom<Billing>(initialBillingDetails);