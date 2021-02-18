const layout = require('./layout');

module.exports = () => {

  return layout({
    content: `
      <section class="bg-danger">
        <div class="container">
            <h1>Szkoła muzyczna</h1>
        </div>
      </section>
      <section>
        <div class="container">
          <h1>Instrumenty</h1>
        </div>
      </section>
      <footer>
        <div class="container">
          <h1>Kontakt</h1>
        </div>
      </footer>
    `
  })

}
