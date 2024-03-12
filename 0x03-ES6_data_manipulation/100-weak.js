export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let accessCount = weakMap.get(endpoint) || 0;
  
  weakMap.set(endpoint, accessCount + 1);

  if (accessCount + 1 >= 5) throw new Error('Endpoint load is high');


  return weakMap.get(endpoint);
}
