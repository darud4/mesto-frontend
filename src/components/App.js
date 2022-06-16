import React from "react";
import { Route, Switch, useHistory } from 'react-router-dom';

import { api } from "../utils/api";
import * as auth from '../utils/auth';
import * as texts from '../utils/texts';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";
import ImagePopup from "./ImagePopup";
import Logout from "./Logout";
import ProtectedRoute from "./ProtectedRoute";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import PopupWithConfirmation from "./PopupWithConfirmation";
import InfoPopup from "./InfoPopup";
import iconSuccess from '../images/icon-success.png';
import iconFailure from '../images/icon-fail.png';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isProfilePopupOpen, setProfilePopupVisibility] = React.useState(false);
  const [isPlacePopupOpen, setPlacePopupVisibility] = React.useState(false);
  const [isAvatarPopupOpen, setAvatarPopupVisibility] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [deletingCard, setDeletingCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [profileButtonText, setProfileButtonText] = React.useState("Сохранить");
  const [cardButtonText, setCardButtonText] = React.useState("Создать");
  const [confirmationButtonText, setConfirmationButtonText] =
    React.useState("Да");
  const [avatarButtonText, setAvatarButtonText] = React.useState("Сохранить");
  const [isConfirmationPopupOpened, setConfirmationPopupVisibility] =
    React.useState(false);
  const [jwt, setJwt] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [infoIcon, setInfoIcon] = React.useState(null);
  const [infoText, setInfoText] = React.useState('');

  const history = useHistory();

  const handleCardClick = (card) => setSelectedCard(card);
  const handleEditAvatarClick = () => setAvatarPopupVisibility(true);
  const handleEditProfileClick = () => setProfilePopupVisibility(true);
  const handleAddPlaceClick = () => setPlacePopupVisibility(true);

  React.useEffect(() => console.log(cards), [cards]);

  const checkToken = React.useCallback((token) => {
    auth.checkToken(token).then(res => {
      if (res && res.email) {
        setJwt(token);
        api.setToken(token);
        setEmail(res.email);
        setLoggedIn(true);
        history.push('/');
      }
    }).catch(error => console.log(error));
  }, [history]);

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) checkToken(token);
  }, [checkToken]);

  React.useEffect(() => {
    if (jwt !== '')
      Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([userInfo, cards]) => {
          setCurrentUser(userInfo);
          setCards(cards);
        })
        .catch((err) =>
          console.log(texts.INITIAL_LOADING_ERROR, err)
        );
  }, [jwt]);

  function logout() {
    localStorage.removeItem('jwt');
    setJwt('');
    api.setToken('');
    setLoggedIn(false);
  }

  function showConfirmation(card) {
    setConfirmationPopupVisibility(true);
    setDeletingCard(card);
  }

  function handleCardDelete(evt) {
    evt.preventDefault();
    if (deletingCard.owner !== currentUser._id) return;
    setConfirmationButtonText(texts.BTN_DELETE_PROGRESS);
    api
      .deleteCard(deletingCard._id)
      .then((res) => {
        setCards(cards.filter((c) => c._id !== deletingCard._id));
        setConfirmationButtonText(texts.BTN_DELETE);
        setDeletingCard(null);
        closeAllPopups();
      })
      .catch((err) =>
        setConfirmationButtonText(texts.BTN_DELETE_ERROR)
      );
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i === currentUser._id);

    api.likeCard(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function closeAllPopups() {
    setAvatarPopupVisibility(false);
    setProfilePopupVisibility(false);
    setPlacePopupVisibility(false);
    setConfirmationPopupVisibility(false);
    setSelectedCard(null);
    setDeletingCard(null);
  }

  function handleUpdateUser(user) {
    setProfileButtonText(texts.BTN_USERINFO_PROGRESS);
    api
      .setUserInfo(user)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
        setProfileButtonText(texts.BTN_USERINFO);
      })
      .catch((err) => setProfileButtonText(texts.BTN_USERINFO_ERROR));
  }

  function handleUpdateAvatar({ avatar }) {
    setAvatarButtonText(texts.BTN_AVATAR_PROGRESS);
    api
      .setAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
        setAvatarButtonText(texts.BTN_AVATAR);
      })
      .catch((err) => setAvatarButtonText(texts.BTN_AVATAR_ERROR));
  }

  function handleAddPlaceSubmit(newCard) {
    setCardButtonText(texts.BTN_CARDADD_PROGRESS);
    console.log(cards);
    api
      .addCard(newCard)
      .then((res) => {
        console.log(res, cards);
        setCards([res, ...cards]);
        console.log(res, cards);
        closeAllPopups();
        setCardButtonText(texts.BTN_CARDADD);
        console.log(res, cards);
      })
      .catch((err) => setCardButtonText(texts.BTN_CARDADD_ERROR));
  }

  function handleLogin(username, password) {
    auth.doLogin(username, password).then(res => {
      if (res && res.token) {
        setJwt(res.token);
        api.setToken(res.token);
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        setEmail(res.email);
        history.push('/');
      }
      else {
        showInfoTooltip(iconFailure, texts.ERROR_MESSAGE);
      }
    }).catch(error => {
      console.log(error); showInfoTooltip(iconFailure, texts.ERROR_MESSAGE);
    });
  }

  function showInfoTooltip(icon, text) {
    setInfoIcon(icon);
    setInfoText(text);
  }

  function handleSignup(username, password) {
    auth.doSignup(username, password).then(res => {
      if (res.data && res.data._id) {
        history.push('/signin');
        showInfoTooltip(iconSuccess, texts.SUCCESS_MESSAGE);
      }
      else {
        showInfoTooltip(iconFailure, texts.ERROR_MESSAGE);
      }
    }).catch(error => {
      showInfoTooltip(iconFailure, texts.ERROR_MESSAGE);
    });
  }

  function closeInfoPopup() {
    setInfoIcon(null);
    setInfoText('');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header email={email} />
        <Switch>
          <Route path="/logout">
            <Logout onLogout={logout} />
          </Route>
          <Route path="/signup">
            <Register onSubmit={handleSignup} />
          </Route>
          <Route path="/signin">
            <Login onSubmit={handleLogin} />
          </Route>
          <ProtectedRoute path="/" loggedIn={loggedIn} component={Main}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={showConfirmation}
            cards={cards}
          >
          </ProtectedRoute>
        </Switch>
        <Footer />
        <EditAvatarPopup
          isOpen={isAvatarPopupOpen}
          onClose={closeAllPopups}
          onSubmit={handleUpdateAvatar}
          buttonText={avatarButtonText}
        />
        <EditProfilePopup
          isOpen={isProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonText={profileButtonText}
        />
        <AddPlacePopup
          isOpen={isPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          buttonText={cardButtonText}
        />
        <PopupWithConfirmation
          isOpen={isConfirmationPopupOpened}
          onClose={closeAllPopups}
          titleText="Вы уверены?"
          onSubmit={handleCardDelete}
          buttonText={confirmationButtonText}
        ></PopupWithConfirmation>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <InfoPopup icon={infoIcon} text={infoText} onClose={closeInfoPopup} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
