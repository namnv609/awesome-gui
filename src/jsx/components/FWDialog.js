/** FWDialog = Full Width Dialog **/

var React = require('react'),
    mui = require('material-ui'),
    FlatButton = mui.FlatButton,
    SearchForm = require('./SearchForm');

var FWDialog = React.createClass({
    getInitialState: function () {
        return {
            show: null  
        };
    },
    openDialog: function() {
        document.body.style.overflow = "hidden";
        this.setState({
            show: true
        });
    },
    closeDialog: function() {
        document.body.style.overflow = "auto";
        this.setState({
            show: false
        });
    },
    render: function() {
        var dialogTitle = this.props.title || "Untitled";
        var className = "u-full-width";
        var isShow = this.state.show || null;
        var component = this.props.component || null;
        console.log(this.props);

        if (this.state.show !== null) {
            className += isShow ? " fadeInDown" : " fadeOutUp";
        }

        return (
            <div id="full-width-dialog" className={className}>
                <div className="dialog-title">
                    {this.props.showButton ? <FlatButton label="Search" /> : ""} {dialogTitle}
                    <span className="u-pull-right" onClick={this.closeDialog}>
                        <i className="icon-cross"></i>
                    </span>
                </div>
                {component}
            </div>
        );
    }
});

module.exports = FWDialog;