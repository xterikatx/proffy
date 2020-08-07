import React from 'react';

import './styles.css';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/35372047?s=460&u=969f72304f2a735f4446ff7efd443e92023aca18&v=4"
            alt="Erika Lopes"
          />
          <div>
            <strong>Erika Lopes</strong>
            <span>Filosofia</span>
          </div>
        </header>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. <br />
          <br /> It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>

        <footer>
            <p>
                Preço/hora:
                <strong>45$</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
        </footer>
      </article>
    )
}

export default TeacherItem;