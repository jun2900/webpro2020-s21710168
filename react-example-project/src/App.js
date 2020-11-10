import React from "react";
import { Header, Contacts, Footer } from "./components";
import { person } from "./utils/person.js";

const App = () => {
    return (
        <div>
            <Header />
            <hr />
            {person.map(item => {
                return <Contacts name={item.name} motto={item.motto} />;
            })}
            <hr />
            <Footer />
        </div>
    );
};

export default App;
