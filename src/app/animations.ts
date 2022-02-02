import { trigger, state, style, transition, animate } from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
      height: '*'
    })),
    state('out', style({
      height: '0'
    })),
    transition('in => out', animate('1ms ease-in-out')),
    transition('out => in', animate('400ms ease-in-out'))
  ])
];
