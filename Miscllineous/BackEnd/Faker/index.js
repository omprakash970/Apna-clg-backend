const { faker } = require('@faker-js/faker');
let createRandomUser =  ()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

console.log(createRandomUser());
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'Nancy123abc@', 
    database:'mydb'
});
connection.query(" SELECT * FROM Students ", (err, results, fields) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }   
    console.log('Query results:', results);
});
connection.end();