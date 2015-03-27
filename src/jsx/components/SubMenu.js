var React = require('react'),
    mui = require('material-ui'),
    Tabs = mui.Tabs,
    Tab = mui.Tab;

var SubMenu = React.createClass({
    render: function() {
        var candidates = this.props.candidates || [];
        var isShow = this.props.show || false;
        var className = "candidate-submenu ";
        var gridWidth = $('.candidate-list').width();
        className += isShow ? "showSubMenu" : "hideSubMenu";
        if (isShow) {
            $('#candidate-list').width(gridWidth - 256);
        } else {
            $('#candidate-list').css('width', 'auto');
        }
        $(window).trigger('resize');

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
            <div className={className}>
                <Tabs>
                    <Tab label="Tab 1">
                        <div className="tab-template-container">
                            {Candidate}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
});

module.exports = SubMenu;