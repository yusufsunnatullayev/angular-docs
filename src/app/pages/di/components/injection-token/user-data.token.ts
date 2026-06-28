import { InjectionToken } from '@angular/core';

export interface IUser {
  name: string;
  age: number;
}

export const USER_DATA = new InjectionToken<IUser>('user.data', {
  providedIn: 'root',
  factory: () => ({
    name: 'Yusuf',
    age: 19,
  }),
});
