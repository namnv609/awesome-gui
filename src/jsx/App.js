var React = require('react'),
    injectTapEventPlugin = require('react-tap-event-plugin'),
    Header = require('./components/Header'),
    Navigation = require('./components/Navigation'),
    CandidateList = require('./components/CandidateList'),
    FWDialog = require('./components/FWDialog'),
    Candidate = require('./components/Candidate'),
    SearchForm = require('./components/SearchForm');
    /*SubMenu = require('./components/SubMenu');*/


injectTapEventPlugin();

var Wrapper = React.createClass({
    render: function() {
        return (
            <div id="wrapper">
                <Header />
                <Navigation />
                <CandidateList />
                <FWDialog title="ル゜갣饥 獤覌 蟥きゅキ">
                    <Candidate />
                </FWDialog>
                <FWDialog title="Search form">
                    <SearchForm />
                </FWDialog>
            </div>
        );
    }
});

React.render(<Wrapper />, document.body);
