import "./style.css";

const Label = ({innerText}) => (
    <label>
        <span className="caption__label">
            {innerText}
        </span>
    </label>
);

const Legend = ({innerText}) => (
    <legend className="caption__legend">
        {innerText}
    </legend>
);

export {
    Label,
    Legend,
};

/*
                      <label>
                     <span className="fieldset__labelText">
                        Waluta końcowa:
                     </span>
                  </label>
*/

/*
                      <label>
                     <span className="fieldset__labelText">
                        Waluta początkowa:
                     </span>
                  </label>
*/

/*
                   <legend className="fieldset__legend">
                  Kalkulator walut
               </legend>
*/