
const express = require('express');
const app = express();

app.use(express.json());

const mysql = require('mysql2');
const faker = require('faker/locale/en_IND');

// Generate random user
const createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};



app.get('/', (_req, res)=>{
  res.send('Welcome to Home Page ');
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

try {
  const data = Array.from({ length: 10 }, () => createRandomUser());
  const q = "INSERT INTO users (userId, username, email, password) VALUES ?";
  
  connection.query(q, [data.map(user => [user.userId, user.username, user.email, user.password])], (err, result) => {
    if(err) {
      console.error('Error inserting data:', err);
      connection.end();
      return;
    }
    console.log('Data inserted successfully:', result);
    connection.end();
  });
} catch(err) {
  console.log(err);
}