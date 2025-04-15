const img1Input = document.getElementById('img1Input');
const img2Input = document.getElementById('img2Input');
const img3Input = document.getElementById('img3Input');
const img4Input = document.getElementById('img4Input');
const nameInput = document.getElementById('nameInput');
const categoryInput = document.getElementById('categoryInput');
const statusInput = document.getElementById('statusInput');
const rateInput = document.getElementById('rateInput');
const reviewsInput = document.getElementById('reviewsInput');
const monthlyPriceInput = document.getElementById('monthlyPriceInput');
const oldPriceInput = document.getElementById('oldPriceInput');
const newPriceInput = document.getElementById('newPriceInput');
const descriptionInput = document.getElementById('descriptionInput');
const submitBtn = document.getElementById('submitBtn');
const deleteBtn = document.getElementById('deleteBtn');

submitBtn.addEventListener('click', () => {
    fetch("https://67ee9307c11d5ff4bf7a2071.mockapi.io/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          images: {
            img1: img1Input.value,
            img2: img2Input.value,
            img3: img3Input.value,
            img4: img4Input.value
          },
          name: nameInput.value,
          category: categoryInput.value,
          status: statusInput.value,
          rate: rateInput.value,
          reviews: reviewsInput.value,
          monthlyPrice: monthlyPriceInput.value,
          oldPrice: oldPriceInput.value,
          newPrice: newPriceInput.value,
          description: descriptionInput.value
        })
    })
    .then(response => response.json())
    .then(data => alert('Success! Product No.' + data.id))
    .catch(error => alert('Something went wrong. Please try again later.' + error));
})

deleteBtn.addEventListener('click', () => {
    const id = prompt('Enter the ID of the product you want to delete:');
    fetch(`https://67ee9307c11d5ff4bf7a2071.mockapi.io/api/products/${id}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => alert('Success! Product No.' + data.id +' has been deleted.'))
    .catch(error => alert('Something went wrong. Please try again later.' + error));
})