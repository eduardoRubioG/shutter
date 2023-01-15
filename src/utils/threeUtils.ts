import { Vector3 } from "three";

export const rsqw = (t: number, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) =>
  (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);

/**
 *
 * @param vectorA Starting position
 * @param vectorB Ending position
 * @param currVector Current position that will be interpolating between A and B
 * @param speed Speed at which we want to interpolate
 * @param alpha Value between [0,1] where result will be vectorA when alpha is 0, and vectorB when alpha is 1
 * @param delta Three's time since the last frame. Used to normalize frames among different devices
 * @returns interpolated vector
 */
export const scrollBetweenTwoVectors = (
  vectorA: Vector3,
  vectorB: Vector3,
  currVector: Vector3,
  speed: number,
  alpha: number,
  delta: number
) => {
  const resultingVector = new Vector3();
  resultingVector.copy(currVector);

  const camScrollAlpha = Math.min(1, Math.max(0, alpha));

  resultingVector.lerpVectors(vectorA, vectorB, camScrollAlpha);

  return resultingVector;
};
