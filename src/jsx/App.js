var React = require('react'),
    Button = require('./components/Button'),
    NavBar = require('./components/Toolbar'),
    Dropdown = require('./components/Dropdown');

var Wrapper = React.createClass({
    render: function() {
        return (
            <div id="wrapper">
                <h1>Welcome</h1>
                <NavBar />
                <Button />
                <Dropdown />
            </div>
        )
    }
});

React.render(<Wrapper />, document.body);