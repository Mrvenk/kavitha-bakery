// Data for Cool Cakes
const coolCakes = [
    {name: 'Choco Ice Cake', description: 'Rich chocolate ice cake', price: '₹600', img: 'images/cool-cake1.jpg'},
    {name: 'Vanilla Ice Delight', description: 'Vanilla flavored cool cake', price: '₹550', img: 'images/cool-cake2.jpg'},
    {name: 'Strawberry Frost', description: 'Strawberry ice cake with layers', price: '₹580', img: 'images/cool-cake3.jpg'},
    {name: 'Mango Chill', description: 'Refreshing mango ice cake', price: '₹620', img: 'images/cool-cake4.jpg'},
    {name: 'Blueberry Frozen', description: 'Blueberry infused ice cake', price: '₹630', img: 'images/cool-cake5.jpg'},
    {name: 'Pineapple Freeze', description: 'Chilled pineapple cake', price: '₹560', img: 'images/cool-cake6.jpg'},
    {name: 'Butterscotch Cool Blast', description: 'Butterscotch cool cake', price: '₹590', img: 'images/cool-cake7.jpg'}
];

// Data for Normal Cakes
const normalCakes = [
    {name: 'Classic Chocolate', description: 'Delicious classic chocolate cake', price: '₹500', img: 'images/normal-cake1.jpeg'},
    {name: 'Vanilla Dream', description: 'Soft vanilla sponge cake', price: '₹450', img: 'images/normal-cake2.jpeg'},
    {name: 'Red Velvet', description: 'Rich and creamy red velvet cake', price: '₹520', img: 'images/normal-cake3.jpeg'},
    {name: 'Black Forest', description: 'Traditional black forest cake', price: '₹550', img: 'images/normal-cake4.jpeg'},
    {name: 'Fruit Fiesta', description: 'Fruit-filled cake delight', price: '₹530', img: 'images/normal-cake5.jpeg'},
    {name: 'Coffee Caramel', description: 'Coffee and caramel combo', price: '₹540', img: 'images/normal-cake6.jpeg'},
    {name: 'Almond Cake', description: 'Nutty almond flavor cake', price: '₹560', img: 'images/normal-cake7.jpeg'}
];

// Function to show Cool Cakes
function showCoolCakes() {
    displayCakes(coolCakes, 'Cool Cakes');
}

// Function to show Normal Cakes
function showNormalCakes() {
    displayCakes(normalCakes, 'Normal Cakes');
}

// Function to display cakes
function displayCakes(cakes, category) {
    document.getElementById('flavor-heading').textContent = category;
    let cakeList = document.getElementById('cake-list');
    cakeList.innerHTML = ''; // Clear the current cakes

    cakes.forEach((cake, index) => {
        cakeList.innerHTML += `
        <div class="col-md-4" data-aos="fade-up">
            <div class="card mb-4 cake-card" onclick="openCakeModal(${index}, '${category}')">
                <img src="${cake.img}" class="card-img-top" alt="${cake.name}">
                <div class="card-body">
                    <h5 class="card-title">${cake.name}</h5>
                    <p class="card-text">${cake.description}</p>
                    <p><strong>Price: ${cake.price}/1kg</strong></p>
                </div>
            </div>
        </div>`;
    });

    AOS.init(); // Reinitialize animations after loading new content
}

// Function to open the modal with cake details
function openCakeModal(index, category) {
    const cake = category === 'Cool Cakes' ? coolCakes[index] : normalCakes[index];
    document.getElementById('modal-img').src = cake.img;
    document.getElementById('modal-title').textContent = cake.name;
    document.getElementById('modal-description').textContent = cake.description;
    document.getElementById('modal-price').textContent = cake.price;
    $('#cakeModal').modal('show');
}
