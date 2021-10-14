console.log("howdy planet");

fetch("https://api.github.com/users/gingus55/repos")
  .then(function (response) {
    // console.log();
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // renderCards

    const container = $("#card-container");
    const createCardAndAppend = function (each) {
      return `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="${each.name}">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
    };

    container.append(createCardAndAppend);
    data.forEach(createCardAndAppend);
  });
