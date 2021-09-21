function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
let zeroToOne = new Book("Zero To One", "Peter Thiel", 300, "not read yet");

let myLibrary = [theHobbit, zeroToOne];

let newBookElement = document.getElementById("newBook");
document.getElementById("form").style.visibility = "hidden"

newBookElement.addEventListener('click', function() {
    document.getElementById("form").style.visibility = "visible"
    let submitButtonElement = document.getElementById("submitButton");

    submitButtonElement.addEventListener("click", function() {
        var name = document.getElementById("myForm").elements.namedItem("bookName").value;
        var author = document.getElementById("myForm").elements.namedItem("bookAuthor").value;
        var pages = document.getElementById("myForm").elements.namedItem("bookPages").value;

        var aBook = new Book(name, author, pages, 'not yet');
        console.log(myLibrary)
        console.log(aBook)
        myLibrary.push(aBook);
        addBookToLibrary(myLibrary)
        document.getElementById("form").style.visibility = "hidden";
    })
})

function addBookToLibrary(myLibrary) {
    let text = ``
    for(let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        text = text + `
        <div>
            ${book.title}
        </div>`
    }
    let booksTableElement = document.getElementById("booksTable")
    booksTableElement.innerHTML = text;
}