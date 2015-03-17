var React = require('react'),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton,
    FontIcon = mui.FontIcon;

var Button = React.createClass({
    render: function() {
        return (
            <div class="example-page">
                <RaisedButton secondary={true}>
                    <span className="mui-raised-button-label example-image-button">Choose an Image</span>
                    <input type="file" id="imageButton" className="example-image-input" />
                </RaisedButton>
            </div>
        );
    }
});

module.exports = Button;
