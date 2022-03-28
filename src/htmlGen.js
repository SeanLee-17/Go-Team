const managerMakerCard = (manager) => {
    return `
    <div class="card" style="width: 18rem;">
    <h4 class="card-title">${manager.getName()}</h4>
    <p>${manager.getRole()}</p>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
    `
};

const engineerEngineCard = (engineer) => {
    return `
    <div class="card" style="width: 18rem;">
    <h4 class="card-title">${engineer.getName()}</h4>
    <p>${engineer.getRole()}</p>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</li>
        <li class="list-group-item">Office Number: ${engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
    `
};

const internInterfaceCard = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
    <h4 class="card-title">${intern.getName()}</h4>
    <p>${intern.getRole()}</p>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</li>
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
<div class="jumbotron jumbotron-fluid">
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