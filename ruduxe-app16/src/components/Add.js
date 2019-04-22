import React from 'react';

const AddComment = ( { addComment } ) => {

  return (

    <div className="comments__add-block">
    <h1>Комментарии:</h1>
      <input
        className="comments__input"
        type="text"
        placeholder="Имя" />
      <textarea
        className="comments__textarea"
        placeholder="Сообщение">
      </textarea>

      <button
        className="comments__button"
        onClick={ (evt) => {

          const name = document.querySelector('.comments__input');
          const text = document.querySelector('.comments__textarea');

          let date = new Date();
          const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
          date = date.toLocaleString('ru', options);

          if (name.value && text.value) {

            addComment(name.value, date, text.value);
            name.value = '';
            text.value = '';

          } else {

            alert('Вы не ввели имя или сообщение!');

          }


        }}>
        Отправить
      </button>
    </div>

  )

};





export default AddComment;
