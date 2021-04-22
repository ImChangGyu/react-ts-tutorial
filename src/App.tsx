import React from "react";
import Greetings from "./components/Greetings";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";

function App() {
    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form);
    };

    return (
        <>
            <Greetings name="ImChangGyu" />
            <Counter />
            <MyForm onSubmit={onSubmit} />
        </>
    );
}

export default App;
