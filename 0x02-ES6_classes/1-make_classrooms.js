import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const result = [];
  const result1 = new ClassRoom(19);
  const result2 = new ClassRoom(20);
  const result3 = new ClassRoom(34);
  result.push(result1);
  result.push(result2);
  result.push(result3);
  return result;
}
