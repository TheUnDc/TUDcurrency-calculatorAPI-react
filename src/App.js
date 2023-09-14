import Select from "./Select";
import Label from "./Label";
import Legend from "./Legend";
import { Buttons } from "./Button/index";
import { ButtonSwapStyled, ButtonSubmitStyled } from "./Button/styled";
import Container from "./Container";
import Form from "./Form";
import { useState } from "react";
import Clock from "./Clock";
import { Paragraph, InputS } from "./StyledApp.js";

function App() {


   const [input, setInput] = useState(1);
   const [output, setOutput] = useState("");

   const [selectedInput, setSelectedInput] = useState("EUR");
   const [selectedOutput, setSelectedOutput] = useState("PLN");

   const swapCurrency = () => {
      setInput(output);
      setOutput(input);
   };

   const calculateCurrency = (event) => {
      event.preventDefault()

      const eurUsd = 1.9; //usdEur (1/1.9)
      const eurPln = 4.4; //plnEur (1/4.4)
      const usdPln = 4.6; //plnUsd (1/4.6)

      let exchangeRate = 1; 

      switch (true) {
         case selectedInput === "EUR" && selectedOutput === "USD":
            exchangeRate = (eurUsd);
            break;

         case selectedInput === "USD" && selectedOutput === "EUR":
            exchangeRate = (1 / eurUsd);
            break;

         case selectedInput === "EUR" && selectedOutput === "PLN":
            exchangeRate = (eurPln);
            break;

         case selectedInput === "PLN" && selectedOutput === "EUR":
            exchangeRate = (1 / eurPln);
            break;

         case selectedInput === "USD" && selectedOutput === "PLN":
            exchangeRate = (usdPln);
            break;

         case selectedInput === "PLN" && selectedOutput === "USD":
            exchangeRate = (1 / usdPln);
            break;

         default:;
      }

      const result = (exchangeRate) * (input);
      setOutput(result.toFixed(2))
   }

   return (
      <Container>
         <Form onSubmit={calculateCurrency}>
            <Legend innerText={"Kalkulator walut"} />

            <Clock />

            <Paragraph>
               <Label innerText={"Waluta początkowa:"} />

               <Select name={"firstCurrency"} selectedValue={selectedInput} selectChange={({ target }) => { setSelectedInput(target.value); }} />
               <InputS
                  className="input"
                  type={"number"}
                  min={"0"}
                  autoFocus={true}
                  step={"any"}
                  value={(input)}
                  onChange={({ target }) => { setInput(target.value) }}
               />
            </Paragraph>

            <ButtonSwapStyled as={Buttons} type={"button"} label={"⮀ SWAP ⮀"} onClick={swapCurrency} />

            <Paragraph>
               <Label innerText={"Waluta końcowa:"} />

               <Select name={"secoundCurrency"} selectedValue={selectedOutput} selectChange={({ target }) => { setSelectedOutput(target.value) }} />
               <InputS
                  className="input"
                  readOnly type={"number"}
                  value={(output)}
               />
            </Paragraph>

            <ButtonSubmitStyled as={Buttons} type={"submit"} label={"🖩 Przelicz 🖩"} />
         </Form>
      </Container>
   )
};

export default App;
