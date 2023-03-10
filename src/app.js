// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

const pronouns = ["the", "our"];
const adjs = ["great", "big"];
const nouns = ["jogger", "racoon"];

const getPermutations = (pronouns, adjs, nouns) => {
  for (const pronoun of pronouns) {
    for (const adj of adjs) {
      for (const noun of nouns) {
        console.log(`${pronoun}${adj}${noun}.com`);
      }
    }
  }
};

getPermutations(pronouns, adjs, nouns);
