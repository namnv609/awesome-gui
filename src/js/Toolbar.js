var React = require('react'),
    mui = require('material-ui'),
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    DropDownIcon = mui.DropDownIcon,
    FontIcon = mui.FontIcon;

var iconMenuItems = [
    { payload: '1', text: 'Download' },
    { payload: '2', text: 'More Info' }
];

var NavBar = React.createClass({
    render: function() {
        return (
            <Toolbar>
                <ToolbarGroup key={0} float="right">
                    <FontIcon className="mui-icon-pie" />
                    <FontIcon className="mui-icon-sort" />
                    <span className="mui-toolbar-separator">&nbsp;</span>
                    <DropDownIcon iconClassName="icon-navigation-expand-more" menuItems={iconMenuItems} />
                </ToolbarGroup>
            </Toolbar>
        );
    }
});

module.exports = NavBar;