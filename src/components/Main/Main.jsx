import { useState } from "react";
import avatar from "../../images/profile_image.jpg";
import Popup from "./components/Popup/Popup";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };
  const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__image-button"
          aria-label="Edit Avatar"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            src={avatar}
            alt="Foto de perfil do usuário"
            className="profile__image"
          />
        </button>

        <div className="profile__info">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <button
            className="profile__edit-button"
            aria-label="Edit Profile"
            onClick={() => handleOpenPopup(editProfilePopup)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M10 1.32827L2.60377 8.7666L1.28302 7.41936L8.66038 0L10 1.32827ZM0 10L1.96226 9.41177L0.584906 8.08349L0 10Z"
                fill="white"
              />
            </svg>
          </button>

          <p className="profile__description">Explorador</p>
        </div>

        <button
          className="profile__add-button"
          type="submit"
          aria-label="Add card"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M22 9.77778H12.2222V0H9.77778V9.77778H0V12.2222H9.77778V22H12.2222V12.2222H22V9.77778Z"
              fill="white"
            />
          </svg>
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

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
