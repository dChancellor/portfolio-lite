const revealTransitionUp = (index = 1) => ({
  distance: '30%',
  origin: 'bottom',
  opacity: 0,
  delay: (index + 1) * 50,
});

const revealTransitionDown = (index = 1) => ({
  distance: '30%',
  origin: 'top',
  opacity: 0,
  delay: (index + 1) * 50,
});

export {revealTransitionUp, revealTransitionDown};
