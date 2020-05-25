const question1 = require("./question1");
const question2 = require("./question2");
const question3 = require("./question3");

const data = require("./data");

console.log("Question 1:\n", data.QUESTION_1);
const solution1 = question1(data.QUESTION_1);
console.log("Solution 1:\n", solution1);

console.log("-------");

console.log("Question 2:");
console.log("Stages: ", data.QUESTION_2_STAGES);
console.log("Users: ", data.QUESTION_2_USERS);
const solution2 = question2(data.QUESTION_2_STAGES, data.QUESTION_2_USERS);
console.log("Solution 2:\n", solution2);

console.log("-------");

console.log("Question 3:\n", data.QUESTION_3);
const solution3 = question3(data.QUESTION_3);
console.log("Solution 3: ", solution3);
