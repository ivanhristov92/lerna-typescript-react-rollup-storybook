import React from 'react';

interface GreetingProps {
    whom?: string
}

const Greeting: React.FC<GreetingProps> = ({ whom = 'World' }) => {
    return (
        <h1>Hello {whom} to you man!!!</h1>
    );
}

export default Greeting;