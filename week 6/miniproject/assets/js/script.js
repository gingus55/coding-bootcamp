console.log("howdy planet");
const baseUrl = "https://api.github.com/users/gingus55/repos";

fetch(baseUrl)
  .then(function (response) {
    // console.log();
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // renderCards

    const container = $("#card-container");
    const createCardAndAppend = function (each) {
      console.log("here i am");
      const card = `<div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title}">${each.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;

      container.append(card);
    };

    data.forEach(createCardAndAppend);
  });

