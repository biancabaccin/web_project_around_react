export default function EditAvatar() {
  return (
    <form className="photo-profile-popup__form" noValidate>
      <p className="photo-profile-popup__title">Alterar a foto do perfil</p>

      <fieldset className="photo-profile-popup__fieldset">
        <input
          className="photo-profile-popup__input"
          type="url"
          placeholder="URL da imagem"
          id="photo-url"
          name="link"
          required
        />
        <span className="photo-profile-popup__input-error photo-url-error"></span>
      </fieldset>

      <button className="photo-profile-popup__submit-button" type="submit">
        Salvar
      </button>
    </form>
  );
}
