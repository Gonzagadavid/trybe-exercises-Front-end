export const MOVE_CAR = 'MOVE_CAR';

export const moveCar = (car, opa) => ({
  type: MOVE_CAR,
  car,
  side: opa,
});
