import anime from 'animejs';

interface animeAnimationProps {
  target: string;
  value: number;
}

export const springInTranslateY = ({ target, value }: animeAnimationProps) => {
  return anime({
    targets: target,
    translateY: value,
    easing: 'spring(0.5, 100, 11, 0)',
    direction: 'normal',
  });
};

export const springOut = ({ target, value }: animeAnimationProps) => {
  return anime({
    targets: target,
    animationType: value,
    easing: 'spring(0.5, 100, 50, 10)',
    direction: 'normal',
  });
};
