const showTeam = (team) => {
  const generateManager = (manager) => {
    return `
    
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="./assets/manager.png" alt="Manager icon">
    <div class="card-body">
        <h4 class="card-title">${manager.getName()}</h4>
        <h5 class="card-title">${manager.getRole()}</h5>
        <p class="card-text">Employee ID: ${manager.getID()}</p>
        <p class="card-text"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
        <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
  </div>
</div>`;
  };
  const generateEngineer = (engineer) => {
    return `
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="./assets/engineer.png" alt="Engineer icon" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">${engineer.getName()}</h4>
    <h5 class="card-title">${engineer.getRole()}</h5>
    <p class="card-text">Employee ID: ${engineer.getID()}</p>
    <p class="card-text">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
    <p class="card-text">Github Handle: ${engineer.getGHID()}</p>
  </div>
</div>`;
  };
  const generateIntern = (intern) => {
    return `
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="./assets/intern.png" alt="Intern icon">
  <div class="card-body">
    <h4 class="card-title">${intern.getName()}</h4>
    <h5 class="card-title">${intern.getRole()}</h5>
    <p class="card-text">Employee ID: ${intern.getID()}</p>
    <p class="card-text">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
    <p class="card-text">School: ${intern.getSchool()}</p>
  </div>
</div>
`;
  };

  const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
};

module.exports = team => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Team Profile Generator</h1>
            <p class="lead">List of all employees.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">
            ${showTeam(team)}
        </div>
  </div>
</body>
</body>
<script src="https://code.jquery.com/jquery-3.6.3.slim.js"
    integrity="sha256-DKU1CmJ8kBuEwumaLuh9Tl/6ZB6jzGOBV/5YpNE2BWc=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>

</html>`
}


