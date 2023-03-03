const express = require('express');
const router = express.Router();

let books = [
  {id: 1, title: 'City of Bones', author: 'Cassandra Clare', pages: 485, borrowed: false},
  {id: 2, title: 'Miss Peregrines home for peculiar children', author: 'Ransom Riggs', pages: 352, borrowed: false},
  {id: 3, title: 'Hush Hush', author: 'Becca Fitzpatrick', pages: 391, borrowed: false},
  {id: 4, title: 'The Last Wish', author: 'Andrzej Sapkowski', pages: 400, borrowed: false}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(books);
});

router.post('/borrow', function(req, res) {
  let bookId = req.body.bookId;
  let borrowedBook = books.find((books) => {
    return(bookId == books.id);
  });
  
  borrowedBook.borrowed = true;
  res.send('Book is borrowed');
});

router.post('/', function(req, res) {
  let newBook = req.body;
  newBook.id = books.length + 1;

  books.push(newBook);

  res.json(books);
});

module.exports = router;
