import actionsTypes from '../../constants/Cards';

const actions = {
  getCards: () => ({
    type: actionsTypes.REQUEST_PRODUCTS,
  }),
  getCardsSuccess: (cards) => ({
    type: actionsTypes.SUCCESS_PRODUCTS,
    payload: cards
  }),
  getCardsFailure: () => ({
    type: actionsTypes.FAILURE_PRODUCTS,
  }),
  searchCards: () => ({
    type: actionsTypes.SEARCH_PRODUCTS,
  }),
  searchCardsSuccess: (name) => ({
    type: actionsTypes.SUCCESS_SEARCH_PRODUCTS,
    payload: name
  }),
}

export default actions;
