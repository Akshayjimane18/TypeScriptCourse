const book = {
    title: "The Title",
    authors: ["John", "Mark", "Rob"],
    read() {
        console.log(this);
    },

    prinAuthor() {
        this.authors.forEach((element)=>{
            console.log(this.title, '-', element);
        });
    }
}
//function keyword for this will have function scope, and arrow function this keyword will have whole page
//scope
book.prinAuthor();