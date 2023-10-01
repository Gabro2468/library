let myLibrary = []

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
 let Witcher = new book('Witcher', 'Andrei Sapkowski', '654', false)
 
 newBook(sevenKingdoms)

 