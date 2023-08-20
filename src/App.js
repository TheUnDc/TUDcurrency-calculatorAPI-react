

function App() {
  return (
    <main className="container">

      <form method="post" className="form">

        <fieldset className="fieldset">

          <legend className="fieldset__legend">
            Kalkulator walut
          </legend>

          <p className="paragraph__margin">

            <label>
              <span className="form__labelText">
                Waluta początkowa:
              </span>
            </label>

            <select className="form__field" name="firstCurrency">
              <option selected value="EUR">Euro</option>
              <option value="USD">Dolar</option>
              <option value="PLN">Złoty</option>
            </select>

            <input className="form__field" type="number" min="0" autofocus name="waluta" value="1"
              step="any" />
          </p>

          <button type="button" className="swap__button">
            ⮀ SWAP ⮀
          </button>

          <p className="paragraph__margin">

            <label>
              <span className="form__labelText">
                Waluta końcowa:
              </span>
            </label>

            <select className="form__field" name="secondCurrency">
              <option value="EUR">Euro</option>
              <option value="USD">Dolar</option>
              <option selected value="PLN">Złoty</option>
            </select>

            <input readonly className="form__field" type="text" />
          </p>

          <p>
            <button className="form__button">&#128425 Przelicz &#128425</button>
          </p>

        </fieldset>
      </form>
    </main>
  )
};

export default App;
