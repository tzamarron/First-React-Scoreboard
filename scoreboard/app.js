//  <h1 id="main-title" title="This is a title.">My First React Element!</h1>
// const title = React.createElement(
//     'h1', // ELement
//     { id: 'main-title', title: 'This is a title.'}, // Attributes
//     'My First React Element!' // Content
// );
// const title = 'My First React Element';
const desc = 'I just learned how to create a React node and render it into the Dom';
const myTitleID = 'main-title';
const name =  'Ted';

const header = (
    <header>
        <h1 id={ myTitleID }>{ name }'s First React Element!</h1>
        <p>{ desc }</p>
    </header>
);

ReactDOM.render(
    header, // What to show
    document.getElementById('root') // Where to show
);