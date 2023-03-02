var express = require('express');
var router = express.Router();

let books = [
  {id: 1, title: 'City of Bones', borrowed: false},
  {id: 2, title: 'Miss Peregrines home for peculiar children', borrowed: false},
  {id: 3, title: 'Hush Hush', borrowed: false},
  {id: 4, title: 'The Last Wish', borrowed: false}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(books);
});

router.post('/borrow', function(req, res) {
  let bookId = req.body.books.id;
  let borrowedBook = books.find((books) => {
    return(bookId == books.id);
  });
  
  borrowedBook.borrowed = true;
  res.send('Book is borrowed');
});

module.exports = router;
