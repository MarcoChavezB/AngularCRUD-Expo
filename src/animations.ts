import { trigger, state, style, animate, transition } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  state('void', style({
    transform: 'translateX(-100%)',
    opacity: 0
  })),
  transition(':enter', [
    animate('0.5s ease-out', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ]),
]);

export const shakeAnimation = trigger('shake', [
  state('shake', style({
    transform: 'translateX(0)'
  })),
  transition('* => shake', [
    animate('0.3s ease-out', style({
      transform: 'translateX(-5px)'
    })),
    animate('0.3s ease-out', style({
      transform: 'translateX(5px)'
    })),
    animate('0.3s ease-out', style({
      transform: 'translateX(-5px)'
    })),
    animate('0.3s ease-out', style({
      transform: 'translateX(5px)'
    })),
    animate('0.3s ease-out', style({
      transform: 'translateX(0)'
    }))
  ]),
]);

  //src/app/animations.ts