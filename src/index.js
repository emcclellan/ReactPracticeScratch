import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Bob',
    lastName: 'Billy'
};

//const element = (
//    <h1>
//        Hello, {formatName(user)}!
//    </h1>
//);

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2> It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    root.render(element);
}

#edit



setInterval(tick, 1000);