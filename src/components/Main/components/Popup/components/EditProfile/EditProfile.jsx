import { useState, useContext } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateUser({ name, about: description });
  };

  return (
    <form className="popup__form" noValidate onSubmit={handleSubmit}>
      <fieldset className="popup__fieldset">
        <input
          className="popup__input"
          type="text"
          placeholder="Nome"
          id="name"
          name="name"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error name-error"></span>
      </fieldset>

      <fieldset className="popup__fieldset">
        <input
          className="popup__input"
          type="text"
          placeholder="Sobre mim"
          id="about"
          name="about"
          minLength="2"
          maxLength="200"
          required
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error about-error"></span>
      </fieldset>

      <button className="popup__submit-button" type="submit">
        Salvar
      </button>
    </form>
  );
}
