import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arrayRooms = [];
  const arrayRoomsValues = [19, 20, 34];

  // eslint-disable-next-line guard-for-in
  for (const i in arrayRoomsValues) {
    const room = new ClassRoom(arrayRoomsValues[i]);
    arrayRooms.push(room);
  }

  return arrayRooms;
}
