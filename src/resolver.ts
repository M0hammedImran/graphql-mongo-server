import { v4 as uuid } from 'uuid';

const books = [
  {
    id: '112xas3',
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: 'vcas123',
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
// console.log(books?.filter((book) => book.title === 'The Awakening')[0]);

export const resolvers = {
  Query: {
    books: () => books,
    book: (_: any, { id }) => {
      return books.filter((book) => book.id === id)[0];
    },
  },
  Mutation: {
    addBook: (_: any, { title, author }: { title: string; author: string }) => {
      const newBook = {
        id: uuid().toString(),
        title,
        author,
      };
      books.push(newBook);
      return newBook;
    },
  },
};
