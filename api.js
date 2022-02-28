fetch('https://openapi.programming-hero.com/api/phones')
  .then(response => response.json())
  .then(json => showFetchData(json.data))

function showFetchData (data) {

    if (data && data.length) {
        // data.forEach(item => {
        //     console.log('item', item)
        // });
        // console.log('data', data)

        for (const item of data) {
            const phoneRow = document.getElementById('phone_row')
            // const card = document.getElementById('card')
            phoneRow.innerHTML = `
            <div class="col-md-3">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${item.image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${item.phone_name}</h5>
                        <p class="card-text">Brand: ${item.brand}</p>
                        <a href="details.html" class="btn btn-primary">Go Details</a>
                    </div>
                </div>
            </div>
            `;
            // console.log('item', item)
            // cardData.appendChild(card);
        }
    }
}