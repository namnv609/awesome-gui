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
    skillsExtractor: function(skills, isChart) {
        var _isChart = (typeof isChart === "undefined" ? true : false);
        var skillData = null;

        if (_isChart === true) {
            var skillName = ["面談評価", "論理", "IT科目", "職業経験", "日本語", "英語"];

            var skillScore = {"result": 0, "logic": 0, "subject": 0, "work_exp": 0, "japanese": 0, "english": 0};
            var skillAlias = {157: "result", 154: "logic", 155: "subject", 156: "work_exp", 127: "japanese", 153: "english"};
            var score = [];

            skills.forEach(function(skill, idx) {
                if (skillAlias[skill.m_skill_id]) {
                    skillScore[skillAlias[skill.m_skill_id]] = skill.score;
                }
            });
            
            for (var key in skillScore) {
                score.push(skillScore[key]);
            }

            skillData = {
                labels: skillName,
                datasets: [
                    {
                        fillColor : "rgba(255,0,0,0.2)",
                        strokeColor : "#F00",
                        pointColor : "#fff",
                        pointStrokeColor : "#9DB86D",
                        data: score
                    }
                ]
            };
        } else {
            var skillCate = {"Programming Language": [], "Frameworks": [], "OS": [], "Languages": [], "Other (IT)": [], "Basic": []};
            var skillCateName = {1: "Programming Language", 2: "Frameworks", 3: "OS", 4: "Languages", 5: "Other (IT)", 6: "Basic"};

            skills.forEach(function(skill, idx) {
                skillCate[skillCateName[skill.m_skill_category_id]].push({
                    'name': skill.m_skill_name,
                    'exp': skill.experience
                });
            });

            skillData = skillCate;
        }

        return skillData;
    },
    getInitialState: function () {
        return {
            skills: []  
        };
    },
    componentDidMount: function () {
    },
    render: function() {
        var candidate = this.props.candidate || {},
            candidateData = candidate.candidate || {},
            candidateImage = {
                backgroundImage: 'url(./dist/imgs/profile/'+ candidateData.id +'.jpg)'
            },
            skillCategories = this.skillsExtractor(candidate.skills, false);

        var programmingLangSkills = skillCategories["Programming Language"].map(function(skill, idx) {
            return (
                <p>
                    <span>{skill.name}</span>
                    <span>{skill.exp}</span>
                </p>
            );
        });
        var frameworkSkills = skillCategories["Frameworks"].map(function(skill, idx) {
            return (
                <p>{skill.name}</p>
            )
        });
        var osSkills = skillCategories["OS"].map(function(skill, idx) {
            return (
                <p>{skill.name}</p>
            )
        })
        return (
            <div className="dialog-content row">
                <div className="columns four">
                    <div className="candidate-card no-border">
                        <div className="candidate-picture" style={candidateImage}>
                            <div className="candidate-score">{candidateData.total_score}</div>
                            <div className="u-cf"></div>
                            <div className="candidate-bookmark-star high-top">{candidateData.total_bookmark}</div>
                        </div>
                        <div className="candidate-name in-dialog">
                            {candidateData.name_kana}
                        </div>
                        <div className="candidate-general">
                            <p className={candidate.gender[candidateData.gender]['class']}>
                                00000{candidateData.id} / {candidate.gender[candidateData.gender]['text']} / 23yr
                            </p>
                            <p className="university">
                                {candidateData.m_highschool_name}
                            </p>
                        </div>
                        <div className="candidate-skills-chart">
                            <SkillsChart skills={this.skillsExtractor(candidate.skills)} />
                        </div>
                    </div>
                </div>
                <div className="columns four">
                    <div className="section-title">
                        タグ
                    </div>
                    <div className="candidate-addition-info">
                        PHP, CSS, JavaScript
                    </div>
                    <div className="section-title">
                        ITスキル・経験
                    </div>
                    <div className="candidate-addition-info">
                        <p className="sub-section-title">言語</p>
                        <div className="programing-languages border-top">
                            {programmingLangSkills}
                        </div>
                        <p className="sub-section-title">フレームワーク</p>
                        <div className="programing-languages border-top">
                            {frameworkSkills}
                        </div>
                        <p className="sub-section-title">OS</p>
                        <div className="programing-languages border-top">
                            {osSkills}
                        </div>
                    </div>
                    <div className="section-title">資格、受賞歴、コンテスト参加歴</div>
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
                    <div className="section-title">インタビュー</div>
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