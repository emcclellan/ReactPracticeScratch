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

//function tick() {
//    const element = (
//        <div>
//            <h1>Hello, world!</h1>
//            <h2> It is {new Date().toLocaleTimeString()}.</h2>
//        </div>
//    );

//    root.render(element);
//}

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

//function App() {
//    return (
//        <div>
//            <Welcome name="Sara" />
//            <Welcome name='Bob' />
//            <Welcome name='Nicole' />
//        </div>
//        )
//}

//big component example next sections will demo how to break this down to more manageable components
function CommentOrig(props) {
    return (
        <div className = "Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {/*{formatDate(props.date)}*/}
            </div>
        </div>
        );
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
        );
}

function UserInfo(props) {
    return (
        <div className = "UserInfo">
            <Avatar user={props.author} />
            <div className="UserInfo-name">
                { props.user.name }
            </div>
        </div>
        );
}

//Breaking down portions of the componentOrig into the above smaller components to make it less of an eye bleed
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />

            <div className="Comment-text">
                {/*{formatDate(props.text)}*/}
            </div>
            <div className="Comment-date">
                {/*{formatDate(props.date)}*/}
            </div>
        </div>
    );
}


//function Clock2(props) {
//    return (
//        <div>
//            <h1>Hello, world!</h1>
//            <h2>It is {props.date.toLocaleTimeString()}.</h2>
//        </div>
//        );
//}

//function tick() {
//    root.render(<Clock2 date={new Date()} />);
//}

//setInterval(tick, 1000);

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
            
            );
    }
}

function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}



class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

root.render(<Toggle />);