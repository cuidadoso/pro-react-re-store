const initialState = {
  books: [
    {
      id: 1,
      title: "Same book",
      author: "Same author"
    },
    {
      id: 2,
      title: "Another book",
      author: "And another author"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
