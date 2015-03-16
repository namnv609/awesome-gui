var React = require('react'),
    MUI = require('material-ui'),
    RaisedButton = MUI.RaisedButton,
    FontIcon = MUI.FontIcon,
    TextField = MUI.TextField;

var Main = React.createClass({
    render: function() {
        return (
            <div class="example-page">
                <h1>Material UI</h1>
                <h2>Example project</h2>
                <RaisedButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true}>
                    <FontIcon className="muidocs-icon-custom-github example-button-icon"/>
                    <span className="mui-raised-button-label example-icon-button-label">Github</span>
                </RaisedButton>
                <TextField hintText="wahhht" floatingLabelText="Fuqqqqq" />
            </div>
        );
    }
});

module.exports = Main;
