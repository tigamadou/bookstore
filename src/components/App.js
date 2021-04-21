import React from 'react';
import List from '../containers/BooksList';
import Header from './Header';
import Form from '../containers/BooksForm';

export default function App() {
  return (
    <div>
      <Header />
      <List />
      <Form />
    </div>
  );
}
