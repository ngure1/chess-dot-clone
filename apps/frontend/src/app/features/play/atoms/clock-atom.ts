import { atom } from 'jotai';
import { BLITZ } from '../constants/time-formats';

export const timeFormatAtom = atom<{
  duration: number;
  increment: number;
}>(BLITZ.THREE);
