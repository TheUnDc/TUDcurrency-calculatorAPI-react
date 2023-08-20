import Input from "./Input";
import Select from "./Select";
import {Label, Legend} from "./FieldSetCaptions";
import Buttons from "./Button";

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

               <Buttons type={"button"} className={"buttons__swap"} label={"⮀ SWAP ⮀"}/>

               <p className="fieldset__paragraph">
                  <Label innerText={"Waluta końcowa:"}/>

                  <Select name={"secoundCurrency"} selectTwo={"true"}/>
                  <Input readonly={"true"} type={"number"} />
               </p>

               <Buttons type={"submit"} className={"buttons__submit"} label={"Przelicz"}/> 
            </fieldset>

         </form>
      </main>
   )
};

export default App;
