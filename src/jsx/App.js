var React = require('react'),
    Header = require('./components/Header'),
    Navigation = require('./components/Navigation');

var Wrapper = React.createClass({
    render: function() {
        return (
            <div id="wrapper">
                <Header />
                <div className="u-cf"></div>
                <Navigation />
            </div>
        );
    }
});

React.render(<Wrapper />, document.body);
