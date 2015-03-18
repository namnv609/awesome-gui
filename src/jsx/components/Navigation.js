var React = require('react'),
    mui = require('material-ui'),
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    TextField = mui.TextField,
    FontIcon = mui.FontIcon;

var Navigation = React.createClass({
    handleSearchButton: function() {
        alert('䏦ふ韥 䛨じゅぐ㫣觊 盥ば䛧黨さ かも');
    },
    handleMenuButton: function() {
        alert(' り婧 かもまぽヂョ 尦す䣥ニュは 穞り婧 覧䋧');
    },
    render: function() {
        return (
            <div id="top-nav">
                <Toolbar className="tool-bar row">
                    <ToolbarGroup className="eight columns">
                        <div className="search u-pull-left">
                            <FontIcon className="icon-search" onClick={this.handleSearchButton} />
                            <span className="result-number">4</span>文
                        </div>
                        <div className="sort-order u-pull-right">
                            䏦ふ: 韥 䛨じ
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup className="four columns">
                        <span className="mui-toolbar-separator"></span>
                        <FontIcon className="icon-menu u-pull-right" onClick={this.handleMenuButton} />
                    </ToolbarGroup>
                </Toolbar>
                <div className="u-cf"></div>
            </div>
        );
    }
});

module.exports = Navigation;