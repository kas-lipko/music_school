module.exports = ({content}) => {
  return `
  <!DOCTYPE html>
  <html lang="pl" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title>Szkoła muzyczna</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
      <link rel="stylesheet" href="main.css">
    </head>
    <body class="bg-dark text-light">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Home</a>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link" href="#">Wykładowcy</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
              <li class="nav-item"><a class="nav-link" href="/student">Strefa ucznia</a></li>
            </ul>
          </div>
        </div>
      </nav>
      ${content}
    </body>
  </html>
  `;
};
