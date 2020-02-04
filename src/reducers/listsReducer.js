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
    default:
      return state;
  }
}

export default listsReducer;