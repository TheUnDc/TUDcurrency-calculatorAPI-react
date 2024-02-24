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
// import { useRate } from "./useRate";

function App() {

   const [input, setInput] = useState(1);
   const [output, setOutput] = useState("");

   const [selectedInput, setSelectedInput] = useState("EUR");
   const [selectedOutput, setSelectedOutput] = useState("PLN");

   // const [apiData, downloadData] = useRate();

   const [date, setDate] = useState();
   const uberDate = (new Date(date * 1000)).toLocaleDateString();
   const [errorLoad, setErrorLoad] = useState();

   const swapCurrency = () => {
      setInput(output);
      setOutput(input);
   };


   const calculateCurrency = async (event) => {
      event.preventDefault();

      // await downloadData();

      fetch(`https://open.er-api.com/v6/latest/${selectedInput}`)
         .then(Response => (Response.json()))
         .then(data => {
            let result = (data.rates[`${selectedOutput}`]) * (input)
            let innerDate = data.time_last_update_unix
            setDate(innerDate)
            setOutput(result.toFixed(2))
            console.log(data);
            setErrorLoad();
         })
         .catch(error => {
            console.error(error);
            setOutput(NaN);
            setErrorLoad("Wysąpił błąd sieci przy pobieraniu zawartości. Spróbój później.")
         })

   }

   return (
      <Container>
         <Form onSubmit={calculateCurrency}>
            <Legend innerText={"Kalkulator walut"} />

            <Clock />

            <Paragraph>
               <Label innerText={"Waluta początkowa:"} />

               <Select
                  name={"firstCurrency"}
                  selectedValue={selectedInput}
                  selectChange={({ target }) => { setSelectedInput(target.value); }}
               />
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

            <ButtonSwapStyled
               as={Buttons}
               type={"button"}
               label={"⮀ SWAP ⮀"}
               onClick={swapCurrency} />

            <Paragraph>
               <Label innerText={"Waluta końcowa:"} />

               <Select
                  name={"secoundCurrency"}
                  selectedValue={selectedOutput}
                  selectChange={({ target }) => { setSelectedOutput(target.value) }}
               />
               <InputS
                  className="input"
                  readOnly type={"number"}
                  value={(output)}
               />
            </Paragraph>

            <ButtonSubmitStyled
               as={Buttons}
               type={"submit"}
               label={"🖩 Przelicz 🖩"}
            />
            <span> Wyliczenie jest aktualne na dzień {uberDate} </span>
            <div style={{color:"red"}} >{errorLoad}</div>
         </Form>
      </Container>
   )
};

export default App;
