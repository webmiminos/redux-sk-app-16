import React from 'react';

const Comments = ( { comments, removeComment } ) => {

  return (

    <ul className="comments__list">
      {
        comments.map( (comment, i) => {

          return (

            <li key={comment.id} className="comments__item">
              <span className="comments__author">{comment.name}
              <p className="comments__date">{comment.date}</p> </span>
              <p className="comments__desc">{comment.text}</p>

              <button className="comments__button" onClick={ () => removeComment(i) }>Удалить комментарий</button>
            </li>

          )
        })
      }
    </ul>
  )

};

export default Comments;
