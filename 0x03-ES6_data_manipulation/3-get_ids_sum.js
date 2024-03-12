export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const ids = array.map((obj) => obj.id);

  return ids.reduce((sum, current) => sum + current, 0);
}
