var React = require('react'),
    mui = require('material-ui'),
    FontIcon = mui.FontIcon;

var CandidateList = React.createClass({
    render: function() {
        return (
            <CandidateCard />
        );
    }
});

var CandidateCard = React.createClass({
    getInitialState: function() {
        return {
            sampleData: []
        }
    },
    componentDidMount: function () {
        this.setState({
            sampleData: [
                {
                    name: 'Amumu',
                    info: '階ゆ 䋤ばた 楺秞こめ䦦 壃壎礯䩵る',
                    gender: 'male'
                },
                {
                    name: 'Leblanc',
                    info: '樦楦 つ囤にゅ韦マ みょ姚勣難ド',
                    gender: 'female'
                },
                {
                    name: 'Lee Sin',
                    info: '階ゆ 䋤ばた 楺秞こめ䦦 壃壎礯䩵る',
                    gender: 'male'
                },
                {
                    name: 'Happy Feet',
                    info: '樦楦 つ囤にゅ韦マ みょ姚勣難ド',
                    gender: 'female'
                }
            ]
        });
    },
    render: function() {
        var CandidateNode = this.state.sampleData.map(function(data, idx) {
            var inlineStyle = {
                backgroundImage: 'url(./dist/imgs/profile/' + idx + '.jpg)'
            };
            return (
                <div className="candidate-card three columns">
                    <div className="candidate-picture" style={inlineStyle}>
                        <div className="candidate-bookmark-icon u-pull-right">
                            <FontIcon className="icon-star-full" />
                        </div>
                        <div className="candidate-score">32</div>
                        <div className="u-cf"></div>
                        <div className="candidate-bookmark-star">24</div>
                    </div>
                    <div className="candidate-name">
                        { data.name }
                    </div>
                    <div className="candidate-general">
                        <p className={ data.gender }>
                            00000{idx} / Male / 23yr
                        </p>
                        <p className="university">
                            Tokyo
                        </p>
                    </div>
                    <div className="candidate-skills">
                        <p>
                            <span>階ゆ</span>
                            <span>58.0</span>
                        </p>
                        <p>
                            <span>階ゆ</span>
                            <span>58.0</span>
                        </p>
                        <p>
                            <span>階ゆ</span>
                            <span>58.0</span>
                        </p>
                        <p>
                            <span>階ゆ</span>
                            <span>58.0</span>
                        </p>
                        <div className="u-cf"></div>
                    </div>
                    <div className="candidate-tags">
                        <span>Tag 01</span>
                        <span>Tag 02</span>
                        <span>Tag 03</span>
                        <span>Tag 04</span>
                        <span>Tag 05</span>
                        <span>Tag 06</span>
                    </div>
                    <div className="candidate-extra">
                        <span>
                            <i className="icon-briefcase"></i> 2015/03
                        </span> ~
                        <span>
                            <i className="icon-history"></i> 1 hour ago
                        </span>
                    </div>
                </div>
            );
        });

        return (
            <div id="candidate-list" className="row">
                { CandidateNode }
            </div>
        );
    }
});

module.exports = CandidateList;
