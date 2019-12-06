
import { trigger, state, animate, query, transition, style, stagger, group, animateChild, animation, keyframes} from
  '@angular/animations';

const DEFAULT_TIMING = 1;

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })), 
  transition('void <=> *', [
    animate(2000)
  ])
]);


export let expandInOut = trigger('expand-in-out', [
  transition('void => *', [

    style({ transform: 'scale3d(.3, .3, .3)' }), 
    animate(100),
    query("@*", [animateChild()], { optional: true })
  ]),
  transition('* => void', [
    query("@*", [animateChild()], { optional: true }),
    animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
  ])
]);


export let slideInUp = [
  style({ transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)', offset: .4 }),
  style({ transform: 'scale(.1) translate3d(2000px, 0, 0)', 'transform-origin': 'right center', offset: 1 }),
]
 

export const jackInTheBox = animation(
  [
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 0,
          transform: 'scale(0.1) rotate(30deg)',
          'transform-origin': 'center bottom',
          offset: 0,
        }),
        style({
          opacity: 0.5,
          transform: 'rotate(-10deg)',
          offset: 0.5,
        }),
        style({
          opacity: 0.7,
          transform: 'rotate(3deg)',
          offset: 0.7,
        }),
        style({
          opacity: 1,
          transform: 'scale(1)',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: { timing: DEFAULT_TIMING, delay: 0 },
  }
);



export function flipIn(rotateX, rotateY) {
  return animation(
    [
      style({ 'backface-visibility': 'visible' }),
      animate(
        '{{ timing }}s {{ delay }}s ease-in',
        keyframes([
          style({
            opacity: 0,
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
            offset: 0.4
          }),
          style({
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
            offset: 0.6
          }),
          style({
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
            offset: 0.8
          }),
          style({
            transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
            offset: 1
          })
        ])
      )
    ],
    { params: { timing: DEFAULT_TIMING, delay: 0, rotateX, rotateY } }
  );
}

export const flipInX = flipIn(1, 0);
export const flipInY = flipIn(0, 1);

//export const slidingIn = trigger('slidingIn',
//  [state('enter', style({ transform: 'translateX({{  inTransX }})' }),
//    { params: { inTransX: '250px' } }
//  ),
//  state('leave', style({ transform: 'translateX({{ outTransX }})' }),
//    { params: { outTransX: '*' } }
//  ),
//  transition('*=>enter', [style({ transform: 'translateX({{initInTransX}}) ' }), animate('{{ timing }}')], { params: { initInTransX: "-250px", timing: "250ms ease-in" } })
//    , transition('*=>leave', [style({ transform: 'translateX({{initOutTransX}})' }), animate('{{ timing }}')], { params: { initOutTransX: "-250px", timing: "250ms ease-in" } })
//  ]
//);

export const slidingIn = trigger('slidingIn',
  [ 
    transition(':enter', [style({ transform: 'translateX({{initInTransX}}) ' }), animate('{{ timing }}', style({ transform: 'translateX({{  inTransX }})' }))], { params: { initInTransX: "-250px", inTransX: "0px", timing:"250ms ease-in" } }) 
    
  ]
  );


export const slidingOut = trigger('slidingOut',
  [
   
    transition(':leave', [style({ transform: 'translateX({{initOutTransX}})' }), animate('{{ timing }}', style({ transform: 'translateX({{ outTransX }})' }))], { params: { initOutTransX: "-250px", outTransX: "0px", timing: "250ms ease-in" } })
  ]);
