/** FWDialog = Full Width Dialog **/

var React = require('react'),
    mui = require('material-ui');

var FWDialog = React.createClass({
    closeDialog: function() {
        alert('@@');
    },
    render: function() {
        var dialogTitle = this.props.title || "Untitled";

        return (
            <div id="full-width-dialog" className="u-full-width">
                <div className="dialog-title">
                    {dialogTitle}
                    <span className="u-pull-right" onClick={this.closeDialog}>
                        <i className="icon-cross"></i>
                    </span>
                </div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = FWDialog;