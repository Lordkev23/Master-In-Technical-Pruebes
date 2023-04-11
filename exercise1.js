/*
Given a Marvel superhero object, write a program that can shows information about a superhero.

It also adds the ability to search the information of many superheroes at once.

Example 1:
showSuperHeroInformation('Iron Man');

out:
Real name: Tony Stark
Powers: Advanced Technology, Air Mobility
Team: The Avengers

Example2:
showSuperHerosInformation([object of names]);

out:
Shows the information of all superheroes.

*/

//Object:
const superherosInfo = {
  "Iron Man": {
    Real_Name: "Tony Stark",
    Powers: ["Advanced Technology", "Air Mobility"],
    Team: "The Avengers",
  },
  "American Captain": {
    Real_Name: "Steve Rogers",
    Powers: ["Superhuman Strength", "Agility and Reflexes Outstanding"],
    Team: "The Avengers",
  },
  "Thor": {
    Real_Name: "Thor Odinson",
    Powers: ["Mjolnir", "Wind and thunder"],
    Team: "The Avengers",
  },
  "Hulk": {
    Real_Name: "Bruce Banner",
    Powers: ["Superhuman Strength", "Invulnerability"],
    Team: "The Avengers",
  },
  "Spider-Man": {
    Real_Name: "Peter Parker",
    Powers: ["Swing", "Sticky Webs", "Spider-Sense"],
    Team: "The Avengers",
  },
};

//Function N°1
let showSuperHeroInformation = (nickName) => {
  console.log(`***************${nickName}***************`);

  if (nickName in superherosInfo) {
    const information = superherosInfo[nickName];

    console.log(`Real Name: ${information.Real_Name}`);
    console.log(`Powers: ${information.Powers.join(" - ")}`);
    console.log(`Team: ${information.Team}`);
    console.log(" ");
  } else {
    console.log(
      `${nickName} doesn't exist in this Super Hero List. Try with another Marvel's Super Hero.`
    );
    console.log(" ");
  }
};

// //Function N°2
let showSuperHerosInformation = (nickNames) => {
  nickNames.forEach((element) => {
    showSuperHeroInformation(element);
  });
};

showSuperHerosInformation([
  "Iron Man",
  "Spider-Man",
  "Thor",
  "Elastick-Man",
  "American Captain",
]);
