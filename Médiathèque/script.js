index = 0 

let books = books.json; 

btn.onclick = () => {
    fetch("books.json")
    .then (reponse => reponse.json)
    .then (data => { 
        output.textContent = `Compte de ${data.authors[0]}`;
    })
}



