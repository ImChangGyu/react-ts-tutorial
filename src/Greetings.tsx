import React from "react";

type GreetingProps = {
    name: string;
};

const Greetings: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}</div>;
};

export default Greetings;
