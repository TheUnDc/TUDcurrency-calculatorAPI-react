import Select from "./Select";
import { Label, Legend } from "./FieldSetCaptions";
import Buttons from "./Button";
import Container from "./Container";
import Form from "./Form";
import { useState } from "react";

function App() {

   const [firstInputContent, setFirstInputContent] = useState(1);
   const [secondInputContent, setSecondInputContent] = useState("");

   const swapCurrency = () => {
      setFirstInputContent(secondInputContent)
      setSecondInputContent(firstInputContent)

   };

   const handleInputChange = (props) => {
      setFirstInputContent(props.target.value);
   };

   const calculateCurrency = (event) => {
      event.preventDefault()

      // const first = {firstSelected};
      // const second = {secondSelected};
      const writedAmount = firstInputContent;
      console.log(writedAmount)
      const first = "EUR";
      const second = "USD";

      let result
      // const fullResult = result.toFixed(2)

      const eurUsd = 1.9; //usdEur (1/1.9)
      const eurPln = 4.4; //plnEur (1/4.4)
      const usdPln = 4.6; //plnUsd (1/4.6)

      switch (true) {
         case first === "EUR" && second === "USD":
            result = (eurUsd) * (writedAmount)
            break;

         case first === "USD" && second === "EUR":
            result = (1 / eurUsd) * (writedAmount)
            break;

         case first === "EUR" && second === "PLN":
            result = (eurPln) * (writedAmount)
            break;

         case first === "PLN" && second === "EUR":
            result = (1 / eurPln) * (writedAmount)
            break;

         case first === "USD" && second === "PLN":
            result = (usdPln) * (writedAmount)
            break;

         case first === "PLN" && second === "USD":
            result = (1 / usdPln) * (writedAmount)
            break;

         default:
            result = (1) * (writedAmount)

      }
      setSecondInputContent(result)
   }

   return (
      <Container>
         <Form onSubmit={calculateCurrency}>
            <Legend innerText={"Kalkulator walut"} />

            <p className="paragraph">
               <Label innerText={"Waluta początkowa:"} />

               <Select name={"firstCurrency"} />
               <input type={"number"} min={"0"} autoFocus={true} step={"any"} value={(firstInputContent)} onChange={handleInputChange} />
            </p>

            <Buttons type={"button"} className={"buttons__swap"} label={"⮀ SWAP ⮀"} onClick={swapCurrency} />

            <p className="paragraph">
               <Label innerText={"Waluta końcowa:"} />

               <Select name={"secoundCurrency"} selectTwo={true} />
               <input type={"number"} value={(secondInputContent)} />
            </p>

            <Buttons type={"submit"} className={"buttons__submit"} label={"Przelicz"} />
         </Form>
      </Container>
   )
};

export default App;
