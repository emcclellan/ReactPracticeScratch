import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

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


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        console.log(isLoggedIn)
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
            );
    }
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
        );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];



function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning
        </div>
        );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>)
    }
}

function ListItem(props){
    return(<li>{props.value}</li>)
}

function NumberList(props){
    const numbers = props.numbers;
    const listItems = props.numbers.map((x) => <ListItem key={x.toString()} value={x}/>);
    return(
        <ul>{listItems}</ul>
    );
}

function NumberList2(props){
    const numbers = props.numbers;
    numbers.map((x) => <ListItem key={x.toString()} value={x}/>);
    return(
        <ul>{numbers.map((x) => <ListItem key={x.toString()} value={x}/>)}</ul>
    );
}

const numbers = [1,2,3,4,5]


function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  
root.render(<NumberList2 numbers={numbers} />);