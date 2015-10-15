var {
    AppCanvas,
    AppBar,
    Styles,
    Avatar,
    Tabs,
    Tab,
    IconButton,
    LeftNav
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;

App = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },

    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Tasks collection and puts them on this.data.tasks
    getMeteorData() {
        let query = {};

        return {
            currentUser: Meteor.user()
        };
    },

    render() {
        return (
            <AppCanvas>
                <div className="top-menu">
                    <AppBar
                      title="Rate Issues"
                      iconElementLeft={<IconButton iconClassName="material-icons">home</IconButton>}
                      iconElementRight={<Avatar>U</Avatar>}
                    />
                    <AccountsUIWrapper />
                </div>
                <div class="left-nav">

                </div>
            </AppCanvas>
        );
    }
});
