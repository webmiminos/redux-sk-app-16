let nextComment = 2;

export const addComment = (name, date, text) => {

    return ({
      type: 'ADD_COMMENT',
      id: nextComment++,
      name,
      date,
      text
    });

};

export const removeComment = (id) => {

  return ({
    type: 'DELETE_COMMENT',
    id
  });

};
