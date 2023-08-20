import Input from "./Input";

function App() {
   return (
      <main className="container">

         <form method="post" className="form">

            <fieldset className="fieldset">

               <legend className="fieldset__legend">
                  Kalkulator walut
               </legend>

               <p className="fieldset__paragraph">

                  <label>
                     <span className="fieldset__labelText">
                        Waluta początkowa:
                     </span>
                  </label>

                  <select className="fieldset__field" name="firstCurrency">
                     <option selected value="EUR">Euro</option>
                     <option value="USD">Dolar</option>
                     <option value="PLN">Złoty</option>
                  </select>

                  <Input type={"number"} min={"0"} autofocus={"true"} value={"1"} step={"any"} />
               </p>

               <button type="button" className="buttons__swap">
                  ⮀ SWAP ⮀
               </button>

               <p className="fieldset__paragraph">

                  <label>
                     <span className="fieldset__labelText">
                        Waluta końcowa:
                     </span>
                  </label>

                  <select className="fieldset__field" name="secondCurrency">
                     <option value="EUR">Euro</option>
                     <option value="USD">Dolar</option>
                     <option selected value="PLN">Złoty</option>
                  </select>

                  <Input readonly={"true"} type={"number"} />
               </p>

               
               <button className="buttons__submit">Przelicz</button>
               

            </fieldset>
         </form>
      </main>
   )
};

export default App;
