export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const accessCount = weakMap.get(endpoint) || 0;

  if (accessCount >= 5) throw new Error('Endpoint load is high');

  weakMap.set(endpoint, accessCount + 1);

  return weakMap.get(endpoint);
}
