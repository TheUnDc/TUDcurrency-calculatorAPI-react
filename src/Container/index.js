import "./style.css";

const Container = (children) => (

    <main className="container">
        <form method="post" className="form">

            <fieldset className="fieldset">
                {children}
            </fieldset>
        </form>
    </main>
);

export default Container;