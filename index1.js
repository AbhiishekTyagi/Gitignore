import express from "express";
import superheroes from "superheroes";
import generateName1  from "sillyname";
import { catNames, randomCatName } from 'cat-names';
const app = express();
const port = 3000;


app.get("/", (req, res) => {
  let name = superheroes.random();
  var Name = generateName1();
  const allCatNames = catNames;
  const randomName = randomCatName();
  // Output: (a random cat name like 'Max' or 'Bella')
  res.send(`<h1 style="color:firebrick">Behold, ${randomName} I am !</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
