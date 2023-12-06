const myLibrary = []

let addToLibrary = (name) => {
     myLibrary.push(name)
}

// scripts for constructor

function book(name, author, pages, readOrNot) {
     this.name = name
     this.author = author
     this.pages = pages
     this.readOrNot = readOrNot
 }
 
// prototype function for info read

book.prototype.sayInfo = function() {
     if (this.readOrNot == true){
         return(this.name + " written by " + this.author + " and has " + this.pages + " pages. Already read.")
     }
     else if(this.readOrNot == false){
         return(this.name + " written by " + this.author + " and has " + this.pages + " pages. Not read yet.")  
     }
     else{
         console.log(this.readOrNot)
         return("Error")
     }
}

// scripts for buttons 

const addBtn = document.querySelector("#add")
const addPopUp = document.querySelector("#addPopUp")
const submitBtn = document.querySelector("#submitBtn")

addBtn.addEventListener("click", () => {
    addPopUp.showModal()
})

submitBtn.addEventListener("click", () => {
    addPopUp.close()
})

let addReadBtn = (readBtn) => {

    readBtn.addEventListener("click", () => {
        if(readBtn.textContent == "Read"){
            readBtn.textContent = "Not Read"
            readBtn.style.backgroundColor = "lightcoral"
        }
    
        else if(readBtn.textContent == "Not Read"){
            readBtn.textContent = "Read"
            readBtn.style.backgroundColor = "lightgreen"
        }
    
        else{
            console.log("Error, problem with readBtn ")
        }
    })
}

//function for making new books 

let count = 0

let makeNewBook = (name,author,pages,readOrNot) => {
    let newBook = document.createElement("div")
    newBook.classList.add("book")

    let newBookName = document.createElement("p")
    newBookName.textContent = '"' + name + '"'
    newBook.appendChild(newBookName)

    let newBookAuthor = document.createElement("p")
    newBookAuthor.textContent = author
    newBook.appendChild(newBookAuthor)

    let newBookPages = document.createElement("p")
    newBookPages.textContent = pages
    newBook.appendChild(newBookPages)
    
    let newBookRead = document.createElement("button")
    if(readOrNot === true){
        newBookRead.textContent = "Read"
        newBookRead.classList.add("ifReadBtn")
    }
    else if(readOrNot === false){
        newBookRead.textContent = "Not Read"
        newBookRead.classList.add("ifReadBtn")
        newBookRead.style.backgroundColor = "lightcoral"
    }
    else {
        console.log("Error. Problem with read or not value ")
    }
    addReadBtn(newBookRead)
    newBook.appendChild(newBookRead)

    // final appending new book into library    
    
    library.insertBefore(newBook, addBtn)
    count =+ 1 
}

// scripts for gaining data from form 

const library = document.querySelector("#library")

let bookForm = document.querySelector("#bookForm")

bookForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let name = document.querySelector("#bookName").value
    let author = document.querySelector("#bookAuthor").value
    let pages = document.querySelector("#bookPages").value
    let radio = document.getElementsByName("readOrNot")
    let readOrNot
    if(radio[0].checked){
        readOrNot = true
    }
    else if(radio[1].checked){
        readOrNot = false
    }

    addToLibrary(new book(name, author, pages, readOrNot))  
    
    makeNewBook(name,author,pages,readOrNot)

})



