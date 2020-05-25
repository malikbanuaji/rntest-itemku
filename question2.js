/**
 * There is a mobile game with stage. We wanna get the failure rate of each stage.
 * The failure rate is defined as follows;
 * Number of players who have reached the stage but have not yet cleared / Number of players who have reached the stage.
 * Complete the function to return an array containing the number of the stage in descending order of the highest failure rate,
 * when total stages N,
 * an array users containing the stage in which the game user is currently playing are given as a parameter.
 */

/**
 * Limitations
 * - N, total stages: 1 ~ 500
 * - users:
 *   - The length of array users: 1 ~ 200,000
 *   - users contain numbers 1 ~ N + 1.
 * - Each number in users represents the stage that the user is currently playing.
 * - Where (N + 1) represents the user who cleared the last stage (Nth stage).
 * - If there is a stage with the same failure rate, the smaller number of stages should be placed first.
 * - If there is no user who reaches the stage, the failure rate of the stage is 0.
 */

// const STAGES = 4;
// const USERS = [4, 4, 4, 4, 4];

function solution(N = STAGES, users = USERS) {
  let answer = [];
  let completed = users;
  let totalPlayer = users.length;

  let percentage = [];

  for (let i = 1; i < N + 1; i++) {
    let stuck = 0;
    // total who completed the stage
    completed = completed.filter((item) => item > i);
    // Calculate stuck player
    // Current total player - who completed the stages
    stuck = totalPlayer - completed.length;
    // update current total player who completed the stage
    // because we already calculate the percentation of this stage
    percentage.push([i, stuck / totalPlayer]);
    totalPlayer = completed.length;
  }

  // console.log(
  //   percentage.sort((a, b) => {
  //     return b[1] - a[1];
  //   })
  // );

  answer = percentage.sort((a, b) => {
    return b[1] - a[1] || a[0] - b[0];
  });
  console.log(answer);

  return answer.map((item) => item[0]);
}

const STAGES = 5;
const USERS = [2, 1, 2, 6, 2, 4, 3, 3];

// console.log("Stages", STAGES);
// console.log("Users", USERS);
console.log("Answer", solution(STAGES, USERS));
