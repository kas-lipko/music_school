const layout = require('./layout');

module.exports = () => {
  return layout({
    content: `
      <div class="container">
        <form action="" method="post">
          <input type="text" name="email" placeholder="Email">
          <input type="password" name="password" placeholder="password">
        </form>
        <a class="text-dark" href="#">Zarejestruj się</a>
      </div>
    `
  });
};
