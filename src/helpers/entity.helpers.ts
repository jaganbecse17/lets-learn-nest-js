export const createNewRecord = <T>(list: T[], item: Omit<T, 'id'>): T => {
  const newRecord = { id: list.length + 1, ...item } as T;
  list.push(newRecord);
  return newRecord;
};
