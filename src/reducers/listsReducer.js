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
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default listsReducer;