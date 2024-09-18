// Library Management System functionality

// Select form and table elements
const addBookForm = document.getElementById('add-book-form');
const bookList = document.querySelector('#book-list tbody');

// Array to store books
let books = [];

// Add event listener to the form
addBookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const year = document.getElementById('book-year').value;

    // Create a book object
    const book = {
        title,
        author,
        year
    };

    // Add book to the list
    books.push(book);

    // Update the book list
    updateBookList();

    // Reset form
    addBookForm.reset();
});

// Function to update book list table
function updateBookList() {
    // Clear the current book list in the table
    bookList.innerHTML = '';

    // Loop through books array and add each book to the table
    books.forEach((book, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td><button onclick="deleteBook(${index})">Delete</button></td>
        `;

        bookList.appendChild(row);
    });
}

// Function to delete a book
function deleteBook(index) {
    // Remove the book from the array
    books.splice(index, 1);

    // Update the book list
    updateBookList();
}
