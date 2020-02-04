import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 4;
const initialState = [
  {
    title: "First list",
    id: 0,
    cards: [
      {
        id: 0,
        text: "a static list and a static card"
      },
      {
        id: 1,
        text: "yet another static list and card"
      }
    ]
  },
  {
    title: "Second list",
    id: 1,
    cards: [
      {
        id: 0,
        text: "first card in the second list"
      },
      {
        id: 1,
        text: "second card in second list"
      },
      {
        id: 2,
        text: "third card in second list"
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID
      };
      listID += 1;
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID
      }
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        }
        else {
          return list;
        }
      });

      return newState;

    default:
      return state;
  }
}

export default listsReducer;