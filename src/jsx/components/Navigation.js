var React = require('react'),
    mui = require('material-ui'),
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    TextField = mui.TextField,
    FontIcon = mui.FontIcon,
    SubMenu = require('./SubMenu'),
    SearchForm = require('./SearchForm');

var candidates = [
    {
        name: 'lorem',
        academic: 'Hanoi Aptech',
        tags: 'HTML, CSS, JS, jQuery, HTML, CSS, JS, jQuery, HTML, CSS, JS, jQuery',
        score: '570'
    },
    {
        name: 'no name',
        academic: 'IT Aptech',
        tags: 'PHP, Java',
        score: '355'
    },
];

var Navigation = React.createClass({
    getInitialState: function () {
        return {
            fwDialog: {},
            showSubMenu: false,
            totalCandidate: 0
        };
    },
    componentWillReceiveProps: function (nextProps) {
        var totalCandidate = nextProps.total || 0;

        this.setState({
            fwDialog: nextProps.fwDialog,
            totalCandidate: totalCandidate
        });
    },
    handleSearchButton: function() {
        this.state.fwDialog.props.component = <SearchForm />
        this.state.fwDialog.props.showButton = true;
        this.state.fwDialog.openDialog();
    },
    handleMenuButton: function() {
        var isShow = true;
        if (this.state.showSubMenu) {
            isShow = false;
        }

        this.setState({
            showSubMenu: isShow
        });
    },
    render: function() {
        return (
            <div id="top-nav">
                <Toolbar className="tool-bar row">
                    <ToolbarGroup className="eight columns">
                        <div className="search u-pull-left">
                            <FontIcon className="icon-search" onClick={this.handleSearchButton} />
                            <span className="result-number">{this.state.totalCandidate}</span>人
                        </div>
                        <div className="sort-order u-pull-right">
                            並び順：新着順
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup className="four columns">
                        <span className="mui-toolbar-separator"></span>
                        <FontIcon className="icon-menu u-pull-right" onClick={this.handleMenuButton} />
                    </ToolbarGroup>
                </Toolbar>
                <div className="u-cf"></div>
                <SubMenu candidates={candidates} show={this.state.showSubMenu} />
            </div>
        );
    }
});

module.exports = Navigation;