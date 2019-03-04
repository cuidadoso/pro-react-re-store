export default class BookstoreService {
  getBooks = () => {
    return [
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
    ];
  };
}
