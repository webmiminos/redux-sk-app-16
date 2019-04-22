const chat = (state = [], action) => {

  let comments = state;

  switch (action.type) {

    case 'ADD_COMMENT':

      comments.push({id: action.id, name: action.name, date: action.date, text: action.text });

      localStorage.comments = JSON.stringify(comments);

      return [...comments];

    case 'DELETE_COMMENT':

      comments.splice(action.id, 1);

      localStorage.comments = JSON.stringify(comments);

      return [...comments];

    default: return [...comments];

  }

};

export default chat;
