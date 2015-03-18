/** FWDialog = Full Width Dialog **/

var React = require('react'),
    mui = require('material-ui');

var FWDialog = React.createClass({
    closeDialog: function() {
        alert('@@');
    },
    render: function() {
        var dialogTitle = (typeof this.props.title !== "undefined") ? this.props.title : "Untitled";

        return (
            <div id="full-width-dialog" className="u-full-width">
                <div className="dialog-title">
                    {dialogTitle}
                    <span className="u-pull-right" onClick={this.closeDialog}>
                        <i className="icon-cross"></i>
                    </span>
                </div>
                <div className="dialog-content row">
                    <div className="columns four">01</div>
                    <div className="columns four">02</div>
                    <div className="columns four">03</div>
                </div>
            </div>
        );
    }
});

module.exports = FWDialog;