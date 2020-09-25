const faker = require("faker");

const db = {test: []};

for (let i = 0; i < 10; i++) {
  db.test.push({
    id: i,
    name: faker.name.findName(),
    age: Math.floor(Math.random() * 10 + 1),
    image: faker.image.image()
  });
}

console.log(JSON.stringify(db));

