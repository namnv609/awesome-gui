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
        return {
            javaFrameworks: [
                {
                    payload: '1',
                    text: 'Struts 2'
                },
                {
                    payload: '2',
                    text: 'Hibernate'
                },
                {
                    payload: '3',
                    text: 'Spring MVC'
                }
            ],
            jsFrameworks: [
                {
                    payload: '1',
                    text: 'jQuery'
                },
                {
                    payload: '2',
                    text: 'AngularJS'
                },
                {
                    payload: '3',
                    text: 'React JS'
                }
            ]
        };
    },
    render: function() {
        return (
            <div className="dialog-content row">
                <div className="columns six">
                    <div className="section-title">
                        IT - 大ぴちゅ窣栧
                    </div>
                    <div className="form-search">
                        <div className="programing-languages">
                            <div>
                                <span className="color-red">Java</span>
                                <p>
                                    <DropDownMenu className="form-dropdown" menuItems={this.state.javaFrameworks} />
                                </p>
                            </div>
                            <div>
                                <span className="color-red">JS</span>
                                <p>
                                    <DropDownMenu className="form-dropdown" menuItems={this.state.javaFrameworks} />
                                </p>
                            </div>
                            <div>
                                <span className="color-red">PHP Framework</span>
                                <p>
                                    <DropDownMenu className="form-dropdown" menuItems={this.state.javaFrameworks} />
                                </p>
                            </div>
                            <div>
                                <span className="color-red">Date time</span>
                                <p>
                                    <DatePicker className="form-datepicker" />
                                    <FontIcon className="icon-calendar" />
                                </p>
                            </div>
                            <div>
                                <span className="color-red">Slide</span>
                                <div className="row form-slider">
                                    <div className="four columns">500~</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-title">
                        IT - 大ぴちゅ窣栧
                    </div>
                    <div className="form-search">
                        <div className="programing-languages">
                            <div>
                                <span className="color-red">Java</span>
                                <p>
                                    <Checkbox name="cbbOne" value="1" label="lorem ipsum dolor" />
                                    <Checkbox name="cbbOne" value="1" label="lorem ipsum dolor" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section-title">
                        Tags
                    </div>
                    <div className="form-search">
                        <div className="programing-languages">
                            <div>
                                <TextField className="form-textfield" hintText="JS, ReactJS, ..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns six">
                    <div className="section-title">
                        IT - 大ぴちゅ窣栧
                    </div>
                    <div className="form-search">
                        <div className="programing-languages">
                            <p className="sub-section-title">
                                <span className="color-red">Lorem ipsum</span>
                            </p>
                            <div>
                                <span>Slide</span>
                                <div className="row form-slider">
                                    <div className="four columns color-red">獤䦪ち</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>Slide</span>
                                <div className="row form-slider">
                                    <div className="four columns color-red">獤䦪ち</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>Slide</span>
                                <div className="row form-slider">
                                    <div className="four columns color-red">獤䦪ち</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>Slide</span>
                                <div className="row form-slider">
                                    <div className="four columns color-red">獤䦪ち</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>Slide</span>
                                <div className="row form-slider">
                                    <div className="four columns color-red">獤䦪ち</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span>Slide</span>
                                <div className="row form-slider">
                                    <div className="four columns color-red">獤䦪ち</div>
                                    <div className="eight columns">
                                        <Slider defaultValue={.5} />
                                    </div>
                                </div>
                            </div>

                            <p className="sub-section-title">
                                <span className="color-red">dolor sit amet</span>
                            </p>
                            <div>
                                <TextField className="form-textfield" hintText="JS, ReactJS, ..." />
                            </div>
                            <div class="row">
                                <div className="seven columns">
                                    <Checkbox name="cbbOne" value="1" label="Java" />
                                </div>
                                <div className="five columns">
                                    <DropDownMenu className="form-dropdown" menuItems={this.state.javaFrameworks} />
                                </div>
                            </div>
                            <div class="row">
                                <div className="seven columns">
                                    <Checkbox name="cbbOne" value="1" label="Java" />
                                </div>
                                <div className="five columns">
                                    <DropDownMenu className="form-dropdown" menuItems={this.state.javaFrameworks} />
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