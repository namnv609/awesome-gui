var React = require('react'),
    mui = require('material-ui');

var SkillsChart = React.createClass({
    componentDidMount: function () {
        var canvas = document.getElementById('skillsCanvas').getContext('2d');
        Chart.defaults.global.showTooltips = false;
        Chart.defaults.global.responsive = false;

        new Chart(canvas).Radar(this.props.skills);
    },
    render: function() {
        return (
            <canvas id="skillsCanvas" width="250" height="250"></canvas>
        )
    }
});

var Candidate = React.createClass({
    getInitialState: function () {
        return {
            skills: []  
        };
    },
    componentDidMount: function () {
    },
    render: function() {
        var candidate = this.props.candidate || {};
            candidateImage = {
            backgroundImage: 'url(./dist/imgs/profile/'+ candidate.id +'.jpg)'
        };

        return (
            <div className="dialog-content row">
                <div className="columns four">
                    <div className="candidate-card no-border">
                        <div className="candidate-picture" style={candidateImage}>
                            <div className="candidate-score">705</div>
                            <div className="u-cf"></div>
                            <div className="candidate-bookmark-star high-top">24</div>
                        </div>
                        <div className="candidate-name in-dialog">
                            {candidate.name}
                        </div>
                        <div className="candidate-general">
                            <p className="male">
                                00000{candidate.id} / Male / 23yr
                            </p>
                            <p className="university">
                                Tokyo
                            </p>
                        </div>
                        <div className="candidate-skills-chart">
                            <SkillsChart skills={candidate.skills} />
                        </div>
                    </div>
                </div>
                <div className="columns four">
                    <div className="section-title">
                        韥 䛨じ 
                    </div>
                    <div className="candidate-addition-info">
                        PHP, CSS, JavaScript
                    </div>
                    <div className="section-title">
                        IT - 大ぴちゅ窣栧
                    </div>
                    <div className="candidate-addition-info">
                        <p className="sub-section-title">Language</p>
                        <div className="programing-languages border-top">
                            <p>
                                <span>Java</span>
                                <span>3yr</span>
                            </p>
                            <p>
                                <span>JS</span>
                                <span>3yr</span>
                            </p>
                            <p>
                                <span>CJS</span>
                                <span>3yr</span>
                            </p>
                            <p>
                                <span>HTML </span>
                                <span>3yr</span>
                            </p>
                        </div>
                        <p className="sub-section-title">Framework</p>
                        <div className="programing-languages border-top">
                            <p>
                                CakePHP
                            </p>
                            <p>
                                Kohana II
                            </p>
                            <p>
                                CodeIgniter
                            </p>
                            <p>
                                ASP.NET MVC 4 
                            </p>
                        </div>
                        <p className="sub-section-title">OS</p>
                        <div className="programing-languages border-top">
                            <p>
                                Ubuntuu
                            </p>
                            <p>
                                Windows Server
                            </p>
                        </div>
                    </div>
                    <div className="section-title">File upload</div>
                    <div className="candidate-addition-info">
                        <div className="source-uploaded">
                            <p>
                                fibonacci.cpp
                                <a href="#" className="icon-download3"></a>
                            </p>
                            <p>
                                getting_started_with_react_js.pdf
                                <a href="#" className="icon-download3"></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="columns four">
                    <div className="section-title">Interview</div>
                    <div className="candidate-addition-info"></div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
                    Accusantium, ipsa et aut, atque vel voluptates possimus velit nulla aliquam officia reprehenderit voluptatum a amet quas, commodi!<br />
                    Consectetur beatae minima perspiciatis.<br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
                    Accusantium, ipsa et aut, atque vel voluptates possimus velit nulla aliquam officia reprehenderit voluptatum a amet quas, commodi!<br />
                    Consectetur beatae minima perspiciatis.<br />
                </div>
            </div>
        );
    }
});

module.exports = Candidate;