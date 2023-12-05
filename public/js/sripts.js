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
 
let sevenKingdoms = new book('Seven Kingdoms', 'Someone', '541', true)
 
addToLibrary(sevenKingdoms)

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

// scripts for gaining data from form 

let bookForm = document.querySelector("#bookForm")

bookForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let name = document.querySelector("#bookName")
    console.log(name.value)

    //new book(`${}`) 
})



