var React = require('react'),
    Header = require('./components/Header'),
    Navigation = require('./components/Navigation'),
    CandidateList = require('./components/CandidateList'),
    FWDialog = require('./components/FWDialog');

var Wrapper = React.createClass({
    render: function() {
        return (
            <div id="wrapper">
                <Header />
                <Navigation />
                <CandidateList />
                <FWDialog title="ル゜갣饥 獤覌 蟥きゅキ" />
            </div>
        );
    }
});

React.render(<Wrapper />, document.body);
