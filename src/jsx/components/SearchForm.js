var React = require('react'),
    mui = require('material-ui'),
    DropDownMenu = mui.DropDownMenu,
    DatePicker = mui.DatePicker,
    Slider = mui.Slider,
    FontIcon = mui.FontIcon,
    Checkbox = mui.Checkbox,
    TextField = mui.TextField;



var SearchForm = React.createClass({
    getInitialState: function () {
        var candidateAge = [];
        for (var i = 18; i < 40; i++) {
            candidateAge.push({payload: i, text: i + '以上'})
        }
        return {
            candidateGender: [
                {
                    payload: '0',
                    text: '男性'
                },
                {
                    payload: '1',
                    text: '女性'
                },
                {
                    payload: '0,1',
                    text: '男性・女性'
                }
            ],
            academicBackground: [
                {
                    payload: 'highschool',
                    text: '高校卒業'
                },
                {
                    payload: 'bachelor',
                    text: '大学卒業'
                },
                {
                    payload: 'master',
                    text: '修士卒業'
                },
                {
                    payload: 'doctor',
                    text: '博士卒業'
                }
            ],
            skillMaster: [
                {
                    payload: '10',
                    text: '半年以下'
                },
                {
                    payload: '30',
                    text: '半年以上'
                },
                {
                    payload: '50',
                    text: '一年以上'
                },
                {
                    payload: '70',
                    text: '一年半以上'
                },
                {
                    payload: '90',
                    text: '2年以上'
                }
            ],
            candidateAge: candidateAge,
            sliderRefs: {
                it_subject: 50,
                logical: 50,
                japanese: 50,
                english: 50,
                result_of_interview: 50,
                work_experience: 50,
                score: 500
            }
        };
    },
    onSlideChange: function(ref, _this, value) {
        var cloneState = this.state;
        cloneState.sliderRefs[ref] = Math.round(value * 100);
        this.setState(cloneState);
    },
    render: function() {
        return (
            <div className="dialog-content row">
                <div className="columns six">
                    <div className="section-title">
                        基本条件
                    </div>
                    <div className="form-search">
                        <div className="programing-languages">
                            <div>
                                <span className="color-red">年齢</span>
                                <p>
                                    <DropDownMenu className="form-dropdown half" ref="age_from" menuItems={this.state.candidateAge} />
                                    <DropDownMenu className="form-dropdown half" ref="age_to" menuItems={this.state.candidateAge} />
                                </p>
                            </div>
                            <div>
                                <span className="color-red">性別</span>
                                <p>
                                    <DropDownMenu className="form-dropdown" ref="gender" menuItems={this.state.candidateGender} />
                                </p>
                            </div>
                            <div>
                                <span className="color-red">最終学歴</span>
                                <p>
                                    <DropDownMenu className="form-dropdown" ref="academic_background" menuItems={this.state.academicBackground} />
                                </p>
                            </div>
                            <div>
                                <span className="color-red">就職可能日</span>
                                <p>
                                    <DatePicker className="form-datepicker" ref="working_start_at" />
                                    <FontIcon className="icon-calendar" />
                                </p>
                            </div>
                            <div>
                                <span className="color-red">スコア</span>
                                <div className="row form-slider">
                                    <div className="four columns">{this.state.sliderRefs.score}~</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={5} ref="score" max="10" onChange={this.onSlideChange.bind(this, 'score')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-title">
                        表示条件
                    </div>
                    <div className="form-search">
                        <div className="programing-languages">
                            <div>
                                <span className="color-red">ブックマーク状況</span>
                                <p>
                                    <Checkbox name="cbbOne" value="1" label="ブックマークのみ" />
                                    <Checkbox name="cbbOne" value="1" label="ブックマークなし" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section-title">
                        タグ
                    </div>
                    <div className="form-search">
                        <div className="programing-languages">
                            <div>
                                <TextField className="form-textfield" ref="tags"  hintText="タグを選択" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns six">
                    <div className="section-title">
                        ITスキル・経験・成績
                    </div>
                    <div className="form-search">
                        <div className="programing-languages">
                            <p className="sub-section-title">
                                <span className="color-red">基本科目</span>
                            </p>
                            <div>
                                <span>日本語</span>
                                <div className="row form-slider">
                                    <div className="four columns color-red">{this.state.sliderRefs.japanese}以上</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} ref="japanese" onChange={this.onSlideChange.bind(this, 'japanese')} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>英語</span>
                                <div className="row form-slider">
                                    <div className="four columns color-red">{this.state.sliderRefs.english}以上</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} ref="english" onChange={this.onSlideChange.bind(this, 'english')} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>IT科目</span>
                                <div className="row form-slider">
                                    <div className="four columns color-red">{this.state.sliderRefs.it_subject}以上</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} ref="it_subject" onChange={this.onSlideChange.bind(this, 'it_subject')} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>論理</span>
                                <div className="row form-slider">
                                    <div className="four columns color-red">{this.state.sliderRefs.logical}以上</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} ref="logical" onChange={this.onSlideChange.bind(this, 'logical')} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>面談評価</span>
                                <div className="row form-slider">
                                    <div className="four columns color-red">{this.state.sliderRefs.result_of_interview}以上</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} ref="result_of_interview" onChange={this.onSlideChange.bind(this, 'result_of_interview')} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>職業経験</span>
                                <div className="row form-slider">
                                    <div className="four columns color-red">{this.state.sliderRefs.work_experience}以上</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} ref="work_experience" onChange={this.onSlideChange.bind(this, 'work_experience')} />
                                    </div>
                                </div>
                            </div>

                            <p className="sub-section-title">
                                <span className="color-red">基本科目</span>
                            </p>
                            <div>
                                <TextField className="form-textfield" ref="skills" hintText="JS, ReactJS, ..." />
                            </div>
                            <div class="row">
                                <div className="seven columns">
                                    <Checkbox name="cbbOne" value="1" label="Java" />
                                </div>
                                <div className="five columns">
                                    <DropDownMenu className="form-dropdown" menuItems={this.state.skillMaster} />
                                </div>
                            </div>
                            <div class="row">
                                <div className="seven columns">
                                    <Checkbox name="cbbOne" value="1" label="Java" />
                                </div>
                                <div className="five columns">
                                    <DropDownMenu className="form-dropdown" menuItems={this.state.skillMaster} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = SearchForm;