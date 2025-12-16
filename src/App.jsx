import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <img
          src="./images/logo_vector.png"
          alt="Logotipo Around the U.S."
          className="header__logo"
        />

        <hr className="header__line" />
      </header>

      <main className="content">
        <section className="profile">
          <button className="profile__image-button">
            <img
              src="./images/profile_image.jpg"
              alt="Foto de perfil de Jacques Cousteau"
              className="profile__image"
            />
          </button>

          <div className="profile__info">
            <h1 className="profile__name">Jacques Cousteau</h1>
            <button className="profile__edit-button profile__edit-button_mod-24px">
              <img
                src="./images/edit_button.png"
                alt="Botão para editar o perfil"
                className="profile__edit-button-icon"
              />
            </button>

            <button className="profile__edit-button profile__edit-button_mod-18px">
              <img
                src="./images/edit_button_18px.png"
                alt="Botão para editar o perfil"
                className="profile__edit-button-icon"
              />
            </button>

            <p className="profile__description">Explorador</p>
          </div>

          <button
            className="profile__add-button profile__add-button_mod-150w"
            type="submit"
          >
            <img
              src="./images/add_button.png"
              alt="Botão para adicionar ao perfil"
              className="profile__add-button-icon"
            />
          </button>

          <button
            className="profile__add-button profile__add-button_mod-282w"
            type="submit"
          >
            <img
              src="./images/add_button_282width.png"
              alt="Botão para adicionar ao perfil"
              className="profile__add-button-icon"
            />
          </button>
        </section>

        {/* <section className="elements">
          <template className="elements__template">
            <div className="elements__element">
              <div className="elements__rectangle">
                <button className="elements__image-box">
                  <img src="" alt="" className="elements__image" id="link" />
                </button>
                <button className="elements__delete-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19.3"
                    viewBox="0 0 18 19.3"
                    fill="none"
                  >
                    <path
                      d="M2.45787 18.1422C2.51882 18.8126 3.06735 19.3002 3.73778 19.3002H14.2615C14.9319 19.3002 15.4804 18.7923 15.5414 18.1422L16.7197 5.79004H1.27954L2.45787 18.1422Z"
                      fill="white"
                    />
                    <path
                      d="M16.7201 1.93002H11.5801V1.27991C11.5801 0.568849 11.0113 0 10.3002 0H7.72009C7.00903 0 6.44018 0.568849 6.44018 1.27991V1.93002H1.27991C0.568849 1.93002 0 2.49887 0 3.20993C0 3.92099 0.568849 4.48984 1.27991 4.48984H16.7201C17.4312 4.48984 18 3.92099 18 3.20993C18 2.49887 17.4312 1.93002 16.7201 1.93002Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <div className="elements__bottom-box">
                  <p className="elements__name"></p>
                  <button className="elements__like-button"></button>
                </div>
              </div>
            </div>
          </template>
        </section> */}
      </main>

      <footer className="footer">
        <p className="footer__copyright">&copy; 2025 Around The U.S.</p>
      </footer>
    </>
  );
}

export default App;
