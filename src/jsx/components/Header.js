var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <div id="header">
                <div className="logo u-pull-left">
                    <a href="index.html"><span></span></a>
                </div>
                <div className="user-info u-pull-right">
                    loremipsumdolor@sitamet.com
                </div>
            </div>
        );
    }
});

module.exports = Header;