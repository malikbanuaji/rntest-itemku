const RELATION = [
  [100, "ryan", "music", 2],
  [200, "apeach", "math", 2],
  [300, "tube", "computer", 3],
  [400, "con", "computer", 4],
  [500, "muzi", "music", 3],
  [600, "apeach", "music", 2],
];

function solution(relation = []) {
  var answer = 0;

  // Get length of first row
  const cLength = relation[0].length;
  const cRow = relation.length;

  // generate all subsets from cLength
  const subsets = Array.from({ length: cLength }, (v, k) => k).reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );

  console.log(subsets.sort((a, b) => a.length - b.length));

  let potentialCandidateKey = [];

  for (let set = 0; set < subsets.length; set++) {
    let isFound = false;
    for (let i = 0; i < relation.length; i++) {
      isFound = relation.slice(i + 1).some((item) => {
        return isSame(subsets[set], item, relation[i]);
      });

      if (isFound === true) {
        break;
      }
    }
    if (isFound === false) {
      let m = false; //
      for (let p = 0; p < potentialCandidateKey.length; p++) {
        // loop every potential candidate key
        // ignore it when minimum is found
        if (potentialCandidateKey[p].every((v) => subsets[set].includes(v))) {
          m = true;
          break;
        }
      }
      if (m === false) {
        potentialCandidateKey.push(subsets[set]);
      }
    }
  }
  return potentialCandidateKey.sort((a, b) => a.length - b.length);

  return answer;
}

function getAllSubsets(theArray) {
  return theArray.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );
}

// console.log(solution(RELATION));
// [0,1,2]
// var d = [true, false, true]
// d.includes(true)
// dont put it to potential candidate key

const isSame = (set, item, currentRow) => {
  let s = [];

  for (let i = 0; i < set.length; i++) {
    // console.log(item[set[i]], currentRow[set[i]]);
    s.push(item[set[i]] === currentRow[set[i]]);
  }

  return s.every((d) => d === true);
};

const subsets = Array.from({ length: RELATION[0].length }, (v, k) => k).reduce(
  (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
  [[]]
);

const checker = (relation = []) => {
  let potentialCandidateKey = [];

  for (let set = 0; set < subsets.length; set++) {
    let isFound = false;
    for (let i = 0; i < relation.length; i++) {
      isFound = relation.slice(i + 1).some((item) => {
        return isSame(subsets[set], item, relation[i]);
      });

      if (isFound === true) {
        break;
      }
    }
    if (isFound === false) {
      let m = false;
      for (let p = 0; p < potentialCandidateKey.length; p++) {
        if (potentialCandidateKey[p].every((v) => subsets[set].includes(v))) {
          m = true;
          break;
        }
      }
      if (m === false) {
        potentialCandidateKey.push(subsets[set]);
      }
    }
  }
  return potentialCandidateKey.sort((a, b) => a.length - b.length);
};

const potentialCandidateKey = checker(RELATION);
console.log(potentialCandidateKey);
