var React = require('react'),
    Main = require('./Main'),
    NavBar = require('./Toolbar'),
    Dropdown = require('./Dropdown');

var Wrapper = React.createClass({
    render: function() {
        return (
            <div id="wrapper">
                <NavBar />
                <Main />
                <Dropdown />
            </div>
        )
    }
});

React.render(<Wrapper />, document.body);