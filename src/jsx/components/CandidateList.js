var React = require('react'),
    mui = require('material-ui'),
    FontIcon = mui.FontIcon,
    Candidate = require('./Candidate'),
    candidateGender = {
        0: {
            text: '男性',
            class: 'male'
        },
        1: {
            text: '女性',
            class: 'female'
        }
    };
var CandidateList = React.createClass({
    getInitialState: function () {
        return {
            fwDialog: {}  
        };
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            fwDialog: nextProps.fwDialog
        });
    },
    render: function() {
        return (
            <CandidateCard fwDialog={this.state.fwDialog} />
        );
    }
});

var CandidateCard = React.createClass({
    ageCalculation: function(birthday) {
        var dateTime = birthday.split(/\s/);
        birthday = Date.parse(dateTime[0]);
        var ageDiffMs = Date.now() - birthday;
        var ageDate = new Date(ageDiffMs);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
    getInitialState: function() {
        return {
            candidates: []
        }
    },
    skillsExtractor: function(skills) {
        var skillCate = {"result": [], "logic": [], "subject": [], "work_exp": [], "japanese": [], "english": []};
        var skillAlias = {157: "result", 154: "logic", 155: "subject", 156: "work_exp", 127: "japanese", 153: "english"};
        var skillCateName = {157: "面談評価", 154: "論理", 155: "IT科目", 156: "職業経験", 127: "日本語", 153: "英語"};

        skills.forEach(function(skill, idx) {
            if (skillAlias[skill.m_skill_id]) {
                skillCate[skillAlias[skill.m_skill_id]].push({
                    text: skillCateName[skill.m_skill_id],
                    score: skill.score
                });
            }
        });

        return skillCate;
    },
    componentDidMount: function () {
        $.ajax({
            type: 'POST',
            url: 'api/candidates.php?action=search',
            dataType: 'json',
            success: function(response) {
                this.setState({
                    candidates: response.candidates
                });
                $(".candidate-list").shapeshift({
                    enableDrag: false
                });
            }.bind(this),
            error: function(xmlHTTPReq, ajaxOptions, error) {
                console.log(error);
            }.bind(this)
        });
    },
    onClickCandidateCard: function(idx) {
        var fwDialog = this.props.fwDialog;
        $.ajax({
            type: 'POST',
            url: 'api/candidates.php?action=detail',
            dataType: 'json',
            data: {
                id: idx
            },
            success: function(response) {
                response['gender'] = candidateGender;
                fwDialog.props.component = <Candidate candidate={response} />;
                fwDialog.props.title = response.candidate.name_kana;
                fwDialog.openDialog();
            }.bind(this),
            error: function(xhr, ao, error) {
                console.log(error);
            }
        });
    },
    render: function() {
        var CandidateNode = this.state.candidates.map(function(data, idx) {
            var skills = this.skillsExtractor(data.skills);
            data = data.candidate;
            var inlineStyle = {
                backgroundImage: 'url(./dist/imgs/profile/' + data.id + '.jpg)'
            };
            var registered = data.created_at.split(/\-|\s/);

            return (
                <div className="candidate-card" onClick={this.onClickCandidateCard.bind(this, idx)} skills={skills}>
                    <div className="candidate-picture" style={inlineStyle}>
                        <div className="candidate-bookmark-icon u-pull-right">
                            <FontIcon className="icon-star-full" />
                        </div>
                        <div className="candidate-score">{data.total_score}</div>
                        <div className="u-cf"></div>
                        <div className="candidate-bookmark-star">{data.total_bookmark}</div>
                    </div>
                    <div className="candidate-name">
                        { data.name_kana }
                    </div>
                    <div className="candidate-general">
                        <p className={ candidateGender[data.gender]['class'] }>
                            00000{data.id} / {candidateGender[data.gender]['text']} / {this.ageCalculation(data.birthday)}歳
                        </p>
                        <p className="university">
                            {data.m_highschool_name}
                        </p>
                    </div>
                    <div className="candidate-skills">
                        <p>
                            <span>英語</span>
                            <span>{skills.english[0].score || 0}</span>
                        </p>
                        <p>
                            <span>日本語</span>
                            <span>{skills.japanese[0].score || 0}</span>
                        </p>
                        <p>
                            <span>論理</span>
                            <span>{skills.logic[0].score || 0}</span>
                        </p>
                        <p>
                            <span>IT科目</span>
                            <span>{skills.subject[0].score || 0}</span>
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
                            <i className="icon-briefcase"></i> {registered[0]}/{registered[1]}
                        </span> ~
                        <span>
                            <i className="icon-history"></i> 1 hour ago
                        </span>
                    </div>
                </div>
            );
        }.bind(this));

        return (
            <div id="candidate-list">
                <div className="candidate-list">
                    { CandidateNode }
                </div>
            </div>
        );
    }
});

module.exports = CandidateList;
