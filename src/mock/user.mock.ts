import { UserEntity } from "src/contracts/user.type";

export const USERS_LIST: UserEntity[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', dob: new Date('1990-01-01') },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', dob: new Date('1992-02-02') },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', dob: new Date('1995-03-03') },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com', dob: new Date('1988-04-04') },
];
