import Input from "./Input";
import Select from "./Select";
import {Label, Legend} from "./FieldSetCaptions";

function App() {
   return (
      <main className="container">

         <form method="post" className="form">

            <fieldset className="fieldset">

               <Legend innerText={"Kalkulator walut"}/>

               <p className="fieldset__paragraph">

                  <Label innerText={"Waluta początkowa:"} />

                  <Select name={"firstCurrency"} selectedOne={"true"}/>

                  <Input type={"number"} min={"0"} autofocus={"true"} value={"1"} step={"any"} />
               </p>

               <button type="button" className="buttons__swap">
                  ⮀ SWAP ⮀
               </button>

               <p className="fieldset__paragraph">

                  <Label innerText={"Waluta końcowa:"}/>

                  <Select name={"secoundCurrency"} selectTwo={"true"}/>

                  <Input readonly={"true"} type={"number"} />
               </p>

               
               <button className="buttons__submit">Przelicz</button>
               

            </fieldset>
         </form>
      </main>
   )
};

export default App;
