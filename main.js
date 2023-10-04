console.log('Hello brother');

let books = [
    {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        image: "https://m.media-amazon.com/images/I/91F9WNEThJL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        image: "https://m.media-amazon.com/images/I/61j9UN9VnmL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        image: "https://m.media-amazon.com/images/I/A1aDb5U5myL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "Lolita",
        author: "Vladimir Nabokov",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Lolita_1955.JPG/640px-Lolita_1955.JPG"
    },
    {
        title: "Middlemarch",
        author: "George Eliot",
        image: "https://images.penguinrandomhouse.com/cover/9780143107729"
    },
    {
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Huckleberry_Finn_book.JPG"
    },
    {
        title: "The Stories of Anton Chekhov",
        author: "Anton Chekhov",
        image: "https://m.media-amazon.com/images/I/71dF4fTruzL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        image: "https://cdn.kobo.com/book-images/0e77a0f9-14f7-4a97-9784-053bc1691e87/1200/1200/False/in-search-of-lost-time-volumes-1-to-7-8.jpg"
    },
    {
        title: "Hamlet",
        author: "William Shakespeare",
        image: "https://g.christianbook.com/g/slideshow/7/72789/main/72789_1_ftc_dp.jpg"
    }
];

// Function to render books on shelves
function renderBooks() {
    const shelves = document.querySelectorAll('.shelf');

    // Loop through each book
    books.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        // Create elements for book details (title, author, image)
        const titleElement = document.createElement('h3');
        titleElement.textContent = book.title;

        const authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${book.author}`;

        const imageElement = document.createElement('img');
        imageElement.src = book.image;
        imageElement.alt = book.title;

        imageElement.style.width = '50px';

        // Append book details to the book div
        bookDiv.appendChild(imageElement);
        bookDiv.appendChild(titleElement);
        bookDiv.appendChild(authorElement);

        // Append the book div to a shelf (you can decide which shelf to use)
        const shelfIndex = index % shelves.length;
        shelves[shelfIndex].appendChild(bookDiv);
    });
}

// Call the renderBooks function to display books on shelves
renderBooks();

const newBookButton = document.getElementById('newBookButton');
const bookForm = document.getElementById('bookForm');
newBookButton.addEventListener('click', () => {
    bookForm.style.display = 'block';
});

// Handle form submission to add a new book
const newBookForm = document.getElementById('newBookForm');
newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const image = document.getElementById('image').value;

    // Create a new book object
    const newBook = {
        title,
        author,
        image
    };

    books.push(newBook);
    newBookForm.reset();
    bookForm.style.display = 'none';

    // Re-render the books to update the bookshelf
    renderBooks();
});

// Call the initial renderBooks function to display books on shelves
renderBooks();
