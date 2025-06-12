function adoptPet() {
    alert("Thank you for your interest in adopting! Our team will contact you soon.");
}

const pets = [
    { "name": "Charlie", "type": "Dog", "age": 4, "img": "petshop-img/dog.jpg" },
    { "name": "Buddy", "type": "Dog", "age": 3, "img": "petshop-img/dogs/dog01.jpg" },
    { "name": "Max", "type": "Dog", "age": 3, "img": "petshop-img/dogs/dog02.jpg" },
    { "name": "Milo", "type": "Cat", "age": 3, "img": "petshop-img/cat.webp" },
    { "name": "Whiskers", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat01.jpg" },
    { "name": "Mittens", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat02.jpg" },
    { "name": "Oscar", "type": "Cat", "age": 2, "img": "petshop-img/cats/cat03.jpg" },
    { "name": "Mango", "type": "Capybara", "age": 3, "img": "petshop-img/capybaras/capybara01.jpg" },
    { "name": "Pippin", "type": "Capybara", "age": 5, "img": "petshop-img/capybaras/capybara02.jpg" },
    { "name": "Luna", "type": "Bird", "age": 2, "img": "petshop-img/birds/bird01.jpg" },
    { "name": "Jesper", "type": "Bird", "age": 4, "img": "petshop-img/birds/bird02.jpg" },
]

const ap = document.getElementById("all-pets");
let prevType = ""
let petGroup = ""

pets.forEach(pet => {
    if (pet.type != prevType) {
        petGroup = document.createElement("div");
        petGroup.className = "pet-group"
        ap.innerHTML += `<h1>Type: ${pet.type}</h1>`
        ap.appendChild(petGroup);
        prevType = pet.type;
    } 

    let aPet = petGroup.appendChild(document.createElement("div"));
    aPet.className = "pet";
    aPet.innerHTML = ` 
        <img src="${pet.img}" alt="${pet.name}"> 
        <h3>${pet.name}</h3> 
        <p>Type: ${pet.type}</p> 
        <p>Age: ${pet.age} years</p> 
        <button onclick="adoptPet()">Adopt Now</button> 
    `; 
});

