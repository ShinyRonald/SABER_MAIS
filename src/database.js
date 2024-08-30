// src/database.js
export const infoUsers = [
    {
      email: 'patrickmiguel286@gmail.com',
      nome: 'Patrick Miguel Silva de Jesus Santos',
      date: '07/07/1999',
      college: 'Unijorge',
      course: 'Engenharia da computação',
      password: 'p01016161',
    },
    {
      email: 'ronaldvieira286@gmail.com',
      nome: 'Ronald Vieira de Jesus',
      date: '23/03/2001',
      college: 'Unijorge',
      course: 'Engenharia da computação',
      password: '12345678',
    },
  ];
  
  export function findUserByEmail(email) {
    return infoUsers.find(user => user.email === email);
  }
  
  export function addUser(user) {
    infoUsers.push(user);
  }