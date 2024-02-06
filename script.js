//selecting popup box and popupoverlay
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")

// selecting addpopup button
var addpopupbtn= document.getElementById("add-popupbtn")

addpopupbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

// selecting cancel button
var cancelpopupbtn= document.getElementById("cancel-popup")

cancelpopupbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

// selecting container

var container= document.querySelector(".container")

// selecting add-book, book-title-input,book-author-input,book-description-input

var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = ` <h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}