document.addEventListener("DOMContentLoaded", function (){

})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogBar = document.querySelector("#dog-image-container")
let dogList = document.querySelector("#dog-breeds")

fetch(imgUrl)
.then(res => res.json())
.then(function(doggyArray){
    doggyArray.message.forEach(doggy => {
        let blankLi = document.createElement("li")
        let blankImg = document.createElement("img")
        blankImg.src = doggy
        blankLi.append(blankImg)
        dogBar.append(blankImg)
        
  })
})

fetch(breedUrl)
.then(res => res.json())
.then(res => {
    let dogBreedsArray = Object.keys(res.message)
    dogBreedsArray.forEach((breed) => {
        let breedList = document.createElement("li")
       breedList.innerText =breed
       dogList.append(breedList)
    })
})

dogList.addEventListener("click", (e) =>{
    e.target.style.color = "blue"
})

