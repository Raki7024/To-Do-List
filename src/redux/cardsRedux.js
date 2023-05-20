import shortid from "shortid";
import { strContains } from '../utils/strContains';

export const getFilteredCards = ({cards, searchString}, columnId) => cards
.filter(card => card.columnId === columnId && strContains(card.title, searchString.searchString));
export const getFavouriteCards = ({cards}) => cards.filter(card => card.isFavourite === true);

const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVOURITE = createActionName('TOGGLE_CARD_FAVOURITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

export const addCard = payload => ({type: ADD_CARD, payload});
export const toggleCardFavourite = payload => ({type: TOGGLE_CARD_FAVOURITE, payload});
export const removeCard = payload => ({type: REMOVE_CARD, payload});

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case TOGGLE_CARD_FAVOURITE:
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavourite: !card.isFavourite } : card);
      case REMOVE_CARD:
        return statePart.filter(card => (card.id !== action.payload));
      default:
        return statePart;
    }
};

export default cardsReducer;