//  <h1 id="main-title" title="This is a title.">My First React Element!</h1>
// const title = React.createElement(
//     'h1', // ELement
//     { id: 'main-title', title: 'This is a title.'}, // Attributes
//     'My First React Element!' // Content
// );
// const title = 'My First React Element';

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <span className="stats">Player : {props.totalPlayers}</span>
    </header>
);

const Player = (props) => (
    <div className="player">
        <span className="player-name">{props.name}</span>

        <Counter />
    </div>
);

class Counter extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         score: 0
    //     };
    // }

    state = {
        score: 0,
    };

    // using arrow function to bind the state
    decrementScore = () => {
        this.setState((prevState) => ({
            score: prevState.score - 1
        }));
    };

    incrementScore = () => {
        this.setState((prevState) => ({
            score: prevState.score + 1
        }))
    }

    // // using bind to bind the state
    // incrementScore() {
    //     this.setState({
    //         score: this.state.score + 1,
    //     });
    // }
    // Then in render use onClick={this.incrementScore.bind(this)}

    render() {
        return (
            <div className="counter">
                <button
                    className="counter-action decrement"
                    onClick={this.decrementScore}
                >
                    {" "}
          -
        </button>
                <span className="counter-score">{this.state.score}</span>
                <button
                    className="counter-action increment"
                    onClick={this.incrementScore}
                >
                    {" "}
          -
        </button>
            </div>
        );
    }
}

class App extends React.Component {

    state = {
        players: [
            {
                name: "Guil",
                id: 1,
            },
            {
                name: "Treasure",
                id: 2,
            },
            {
                name: "Ashley",
                id: 3,
            },
            {
                name: "James",
                id: 4
            },
        ]
    };

    render() {
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={this.state.players.length} />

                {/* Players List */}
                {this.state.players.map((player) => (
                    <Player name={player.name} key={player.id.toString()} />
                ))}
            </div>
        )
    }
}
  
ReactDOM.render(
    <App />, // What to show
    document.getElementById("root") // Where to show
);
