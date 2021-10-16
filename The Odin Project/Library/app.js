function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "N");
let zeroToOne = new Book("Zero To One", "Peter Thiel", 300, "N");

let myLibrary = [theHobbit, zeroToOne];

let newBookElement = document.getElementById("newBook");
document.getElementById("form").style.visibility = "hidden"

newBookElement.addEventListener('click', function() {
    document.getElementById("form").style.visibility = "visible";
})

let submitButtonElement = document.getElementById("submitButton");
submitButtonElement.addEventListener("click", function() {
    var name = document.getElementById("myForm").elements.namedItem("bookName").value;
    var author = document.getElementById("myForm").elements.namedItem("bookAuthor").value;
    var pages = document.getElementById("myForm").elements.namedItem("bookPages").value;
    var read = document.getElementById("myForm").elements.namedItem("bookRead").checked ? 'Y' : 'N';

    var aBook = new Book(name, author, pages, read);
    if(myLibrary.includes(aBook)) {
        alert("Book already exists");
    } else {
        myLibrary.push(aBook);
    }
    showLibrary();
    document.getElementById("form").style.visibility = "hidden";
})


function showLibrary() {
    let text = ``
    for(let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        text = text + `
        <div>
            ${book.title}
            <button onclick='removeElement("${book.title}")'>Remove</button>
            <button onclick='changeReadStatus("${book.title}")'>Change Read Status</button><br>
        </div>`
    }    
    let booksTableElement = document.getElementById("booksTable")
    booksTableElement.innerHTML = text;
}


function removeElement(book) {
    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].title === book) {
            index = i;
            break
        }
    } 

    if (index > -1) {
        myLibrary.splice(index, 1);
    }
    showLibrary();
    console.log(myLibrary)
}

function changeReadStatus(book) {
    for(let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].title === book) {
            if(myLibrary[i].read === 'Y'){
                myLibrary[i].read = 'N';
            } else {
                myLibrary[i].read = 'Y'
            }
        }
    }
    showLibrary();
    console.log(myLibrary);
}