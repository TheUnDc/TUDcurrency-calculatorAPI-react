import Select from "./Select";
import { Label, Legend } from "./FieldSetCaptions";
import Buttons from "./Button";
import Container from "./Container";
import Form from "./Form";
import { useState } from "react";

function App() {

   const [firstInputContent, setFirstInputContent] = useState("1");
   const [secondInputContent, setSecondInputContent] = useState("4");

   
   const firstInputValue = ({ target }) => {
      setFirstInputContent(target.value);
      console.log(target.value);
   };

   const secondInputValue = ({ target }) => {
      setSecondInputContent(target.value);
      console.log(target.value);
   };


   const swapCurrency = () => {
      setFirstInputContent(secondInputContent)
      setSecondInputContent(firstInputContent)

   };

   return (
      <Container>
         <Form>
            <Legend innerText={"Kalkulator walut"} />

            <p className="paragraph">
               <Label innerText={"Waluta początkowa:"} />

               <Select name={"firstCurrency"} selectedOne={true} />
               <input type={"number"} min={"0"} autoFocus={true} step={"any"} onChange={firstInputValue} value={(firstInputContent)} />
            </p>

            <Buttons type={"button"} className={"buttons__swap"} label={"⮀ SWAP ⮀"} onClick={swapCurrency} />

            <p className="paragraph">
               <Label innerText={"Waluta końcowa:"} />

               <Select name={"secoundCurrency"} selectTwo={true} />
               <input readOnly type={"number"} onChange={secondInputValue} value={(secondInputContent)} />
            </p>

            <Buttons type={"submit"} className={"buttons__submit"} label={"Przelicz"} />
         </Form>
      </Container>
   )
};

export default App;
