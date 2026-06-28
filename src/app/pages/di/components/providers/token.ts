import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL', {
  factory() {
    return 'yusuf.com';
  },
});

export const IS_BETTER_COUNTER = new InjectionToken<boolean>('IS_BETTER_COUNTER');
