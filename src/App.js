import Select from "./Select";
import Label from "./Label";
import Legend from "./Legend";
import { Buttons } from "./Button/index";
import {ButtonSwapStyled, ButtonSubmitStyled} from "./Button/styled";
import Container from "./Container";
import Form from "./Form";
import { useState } from "react";
import Clock from "./Clock";
import { Paragraph, InputS } from "./GlobalCss";

function App() {


   const [firstInputContent, setFirstInputContent] = useState(1);
   const [secondInputContent, setSecondInputContent] = useState("");

   const handleInputChange = ({ target }) => {
      setFirstInputContent(target.value);
   };

   const [selectedFirstCurrency, setSelectedFirstCurrency] = useState("EUR");
   const [selectedSecondCurrency, setSelectedSecondCurrency] = useState("PLN");

   const handleFirstSelectChange = ({ target }) => {
      setSelectedFirstCurrency(target.value);
   };
   const handleSecondSelectChange = ({ target }) => {
      setSelectedSecondCurrency(target.value);
   };


   const swapCurrency = () => {
      setFirstInputContent(secondInputContent)
      setSecondInputContent(firstInputContent)

   };

   const calculateCurrency = (event) => {
      event.preventDefault()

      const first = selectedFirstCurrency;
      const second = selectedSecondCurrency;
      const writedAmount = firstInputContent;
      let result

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

      const finalResult = result.toFixed(2)
      setSecondInputContent(finalResult)
   }

   return (
      <Container>
         <Form onSubmit={calculateCurrency}>
            <Legend innerText={"Kalkulator walut"} />

            <Clock />

            <Paragraph>
               <Label innerText={"Waluta początkowa:"} />

               <Select name={"firstCurrency"} selectedValue={selectedFirstCurrency} selectChange={handleFirstSelectChange} />
               <InputS
                  className="input"
                  type={"number"}
                  min={"0"}
                  autoFocus={true}
                  step={"any"}
                  value={(firstInputContent)}
                  onChange={handleInputChange}
               />
            </Paragraph>

            <ButtonSwapStyled as={Buttons} type={"button"} label={"⮀ SWAP ⮀"} onClick={swapCurrency} />

            <Paragraph>
               <Label innerText={"Waluta końcowa:"} />

               <Select name={"secoundCurrency"} selectedValue={selectedSecondCurrency} selectChange={handleSecondSelectChange} />
               <InputS
                  className="input"
                  readOnly type={"number"}
                  value={(secondInputContent)}
               />
            </Paragraph>

            <ButtonSubmitStyled as={Buttons} type={"submit"} label={"🖩 Przelicz 🖩"} />
         </Form>
      </Container>
   )
};

export default App;
