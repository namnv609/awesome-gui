var React = require('react'),
    mui = require('material-ui'),
    Tabs = mui.Tabs,
    Tab = mui.Tab;

var SubMenu = React.createClass({
    render: function() {
        var candidates = this.props.candidates || [];
        var Candidate = candidates.map(function(data, idx) {
            var candidatePic = {
                backgroundImage: 'url(./dist/imgs/profile/' + idx + '.jpg)'
            };
            return (
                <div className="candidate-card row">
                    <div className="columns four">
                        <div className="score-bubble">{data.score}</div>
                        <div className="picture" style={candidatePic}></div>
                    </div>
                    <div className="columns eight">
                        <p className="name">{data.name}</p>
                        <p className="academic">{data.academic}</p>
                        <p className="tags">{data.tags}</p>
                    </div>
                </div>
            )
        });
        return (
            <div className="four columns candidate-submenu">
                <Tabs>
                    <Tab label="Tab 1">
                        <div className="tab-template-container">
                            {Candidate}
                        </div>
                    </Tab>
                    <Tab label="Tab 2">
                        <div className="tab-template-container">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam voluptatum eaque, vero cupiditate vitae. Dolorem, molestias, eos? Laudantium, itaque, sit. Libero eum consectetur odio, iste saepe dicta sint aspernatur molestiae.
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
});

module.exports = SubMenu;