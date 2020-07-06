 //<h1 id="main-title" title="This is a title.">My First React Element!</h1>
const title = React.createElement(
    'h1', // ELement
    { id: 'main-title', title: 'This is a title.'}, // Attributes
    'My First React Element!' // Content
);

const desc = React.createElement(
    'p',
    {},
    'I just learned how to create a React node and render it into the DOM'
);

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header, // What to show
    document.getElementById('root') // Where to show
);