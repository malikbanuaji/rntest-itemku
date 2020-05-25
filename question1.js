const ACTION_TYPE = {
  ENTER: "Enter",
  LEAVE: "Leave",
  CHANGE: "Change",
};

function solution(record = []) {
  let answer = [];

  let users = {};

  // utility for spliting each record action, uid, and name
  function detail(user) {
    // name is `undefined` when action is `leave`
    let [action, id, name] = user.split(" ");

    if (action === ACTION_TYPE.LEAVE) {
      return {
        action,
        id,
      };
    }

    return {
      action,
      id,
      name,
    };
  }

  const actions = [];

  for (let i = 0; i < record.length; i++) {
    const chat = detail(record[i]);
    if (chat.action === ACTION_TYPE.CHANGE) {
      // When there is changes, update the user with a given id
      users[chat.id] = chat;
      continue;
    } else if (chat.action === ACTION_TYPE.ENTER) {
      // When user is entering the chat, add/change it
      users[chat.id] = chat;
    }
    actions.push(chat);
  }

  function answerHandler(item) {
    // Set the nickname to default
    let nickname = users[item.id].name;

    if (item.action === ACTION_TYPE.ENTER) {
      // User is entering the chat
      return `${nickname} came in.`;
    }
    if (item.action === ACTION_TYPE.LEAVE) {
      // User is leaving the chat
      return `${nickname} has left.`;
    }
  }

  answer = actions.map(answerHandler);
  return answer;
}

const RECORD = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

console.log("record:\n", RECORD);
console.log("answer:\n", solution(RECORD));
