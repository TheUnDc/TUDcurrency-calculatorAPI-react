import "./style.css";

const Container = ({children}) => (

    <main className="container">
        <form method="post" className="container__form">

            <fieldset className="container__fieldset">
                {children}
            </fieldset>
        </form>
    </main>
);

export default Container;