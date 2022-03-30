const managerMakerCard = (manager) => {
    return `
    <div class="card border border-5 border-danger mx-auto bg-danger bg-opacity-25" style="width: 18rem; margin: 5rem">
    <h2 class="card-title text-center mt-3">${manager.getName()}</h4>
    <p class="text-center">${manager.getRole()}</p>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
    `
};

const engineerEngineCard = (engineer) => {
    return `
    <div class="card border border-5 border-primary mx-auto bg-primary bg-opacity-25" style="width: 18rem; margin: 5rem">
    <h2 class="card-title text-center mt-3">${engineer.getName()}</h4>
    <p class="text-center">${engineer.getRole()}</p>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
    `
};

const internInterfaceCard = (intern) => {
    return `
    <div class="card border border-5 border-warning mx-auto bg-warning bg-opacity-25" style="width: 18rem; margin: 5rem">
    <h2 class="card-title text-center mt-3">${intern.getName()}</h4>
    <p class="text-center">${intern.getRole()}</p>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
    `
};

const vanillaHtml = (TheSquad) =>`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>GO TEAM!</title>
</head>
<body>
<header>
<div class="jumbotron jumbotron-fluid bg-primary text-center bg-opacity-75 p-4 border">
    <h1>The Best Team</h1>
</div>
</header>
<div id="container">
<div class="buisnessCards">
    ${TheSquad.join(' ')}

</div>
</div>

</body>
</html>
`

module.exports = {
    managerMakerCard,
    engineerEngineCard,
    internInterfaceCard,
    vanillaHtml
}