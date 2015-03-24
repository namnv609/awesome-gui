var React = require('react'),
    injectTapEventPlugin = require('react-tap-event-plugin'),
    Header = require('./components/Header'),
    Navigation = require('./components/Navigation'),
    CandidateList = require('./components/CandidateList'),
    FWDialog = require('./components/FWDialog'),
    Candidate = require('./components/Candidate'),
    SearchForm = require('./components/SearchForm');


injectTapEventPlugin();

var Wrapper = React.createClass({
    getInitialState: function () {
        return {
            fwDialog: {}
        };
    },
    componentDidMount: function () {
        this.setState({
            fwDialog: this.refs.fwDialog
        });
    },
    render: function() {
        return (
            <div id="wrapper">
                <Header />
                <Navigation fwDialog={this.state.fwDialog} />
                <CandidateList fwDialog={this.state.fwDialog} />
                <FWDialog ref="fwDialog" title="ル゜갣饥 獤覌 蟥きゅキ" />
            </div>
        );
    }
});

React.render(<Wrapper />, document.body);
