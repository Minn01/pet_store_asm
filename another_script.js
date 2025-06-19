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
];

const activeFilters = [];

$(document).ready(function () {
    renderCheckboxes();
    showPets();
});

function renderCheckboxes() {
    const petForm = $("#filter-form");
    const petTypes = [];
    
    pets.forEach(pet => {
        if (!petTypes.includes(pet.type)) {
            petTypes.push(pet.type);
        }
    });
    
    activeFilters.push(...petTypes);
    
    petForm.append(`<label for="type-${petTypes[0]}">Type:  </label>`);
    
    petTypes.forEach(petType => {
        const inputMarkup = `
        <input type="checkbox" name="animal-filter" id="type-${petType}" value="${petType}" checked>
        <label for="type-${petType}">${petType}</label>
        `;
        petForm.append(inputMarkup);
    });
    
    $("input[name='animal-filter']").on('change', function () {
        const petType = $(this).val();
        
        if (this.checked) {
            if (!activeFilters.includes(petType)) {
                activeFilters.push(petType);
            }
        } else {
            const index = activeFilters.indexOf(petType);
            if (index > -1) {
                activeFilters.splice(index, 1);
            }
        }
        
        showPets();
    });
}

function showPets() {
    const ap = $("#all-pets");
    ap.empty();
    let prevType = "";
    let petGroup = null;
    
    pets
        .filter(pet => activeFilters.includes(pet.type))
        .forEach(pet => {
            if (pet.type != prevType) {
                petGroup = $("<div class='pet-group'></div>");
                ap.append(`<h1>Type: ${pet.type}</h1>`);
                ap.append(petGroup);
                prevType = pet.type;
            }
            
            const $aPet = $('<div class="pet"></div>');
            $aPet.append(
                ` 
                <img src="${pet.img}" alt="${pet.name}"> 
                <h3>${pet.name}</h3> 
                <p>Type: ${pet.type}</p> 
                <p>Age: ${pet.age} years</p> 
                <button onclick="adoptPet()">Adopt Now</button> 
                `
            );
            petGroup.append($aPet);
        });
}
