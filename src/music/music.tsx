let context = new AudioContext();

export function music(frequency: number) {
  console.log(frequency);

  // const context = new AudioContext();
  const o = context.createOscillator();
  const g = context.createGain();
  o.connect(g);
  o.frequency.value = frequency;
  g.connect(context.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.8);
}
