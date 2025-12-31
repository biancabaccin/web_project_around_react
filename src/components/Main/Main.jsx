import { useState, useEffect, useContext } from "react";
import Popup from "./components/Popup/Popup";
import Card from "./components/Card/Card";
import NewCard from "./components/Popup/components/NewCard/NewCard";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import ImagePopup from "./components/Popup/components/ImagePopup/ImagePopup";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({ onOpenPopup, onClosePopup, popup }) {
  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editAvatarPopup = { title: "Edit Avatar", children: <EditAvatar /> };
  const editProfilePopup = { title: "Edit Profile", children: <EditProfile /> };
  const [cards, setCards] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((error) => {
        console.error("Error finding cards:", error);
      });
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch((error) => console.error(error));
  }

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__image-button"
          aria-label="Edit Avatar"
          onClick={() => onOpenPopup(editAvatarPopup)}
        >
          <img
            src={currentUser.avatar}
            alt="Foto de perfil do usuário"
            className="profile__image"
          />
        </button>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__edit-button"
            aria-label="Edit Profile"
            onClick={() => onOpenPopup(editProfilePopup)}
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

          <p className="profile__description">{currentUser.about}</p>
        </div>

        <button
          className="profile__add-button"
          type="submit"
          aria-label="Add card"
          onClick={() => onOpenPopup(newCardPopup)}
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

      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onImageClick={onOpenPopup}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </ul>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
