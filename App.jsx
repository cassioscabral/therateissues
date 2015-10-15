var {
    AppCanvas,
    AppBar,
    Styles,
    Avatar,
    Tabs,
    Tab,
    IconButton,
    LeftNav,
    MenuItem
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

    _toggleNav: function(){
        this.refs.leftNav.toggle();
    },

    render() {
        var menuItems = [
       { route: 'get-started', text: 'Get Started' },
       { route: 'customization', text: 'Customization' },
       { route: 'components', text: 'Components' },
       { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
       {
          type: MenuItem.Types.LINK,
          payload: 'https://github.com/callemall/material-ui',
          text: 'GitHub'
       },
       {
          text: 'Disabled',
          disabled: true
       },
       {
          type: MenuItem.Types.LINK,
          payload: 'https://www.google.com',
          text: 'Disabled Link',
          disabled: true
       },
   ];
        return (
            <AppCanvas>
                <div className="row top-bar">
                    <div className="col-md-12 col-xs-12">
                        <AppBar
                          title="Rate Issues"
                          iconElementLeft={<IconButton iconClassName="material-icons">home</IconButton>}
                          iconElementRight={<AccountsUIWrapper />}
                        />
                    </div>
                </div>
                <div className="row middle-bar">
                    <div className="col-xs-2 col-sm-3 col-md-2 col-lg-2 settings">
                        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
                        <IconButton iconClassName="material-icons" onClick={this._toggleNav}>keyboard_arrow_right</IconButton>
                    </div>
                    <div className="col-xs-8 col-sm-6 col-md-8 col-lg-8 center-xs center-md main-content">
                        <div id="issues-filters" className="row">
                            <div className="col-lg-12">
                                Filters
                            </div>
                        </div>
                        <div id="issues-list" className="row">
                            <div className="col-lg-12">
                                Issues List
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-2 col-sm-3 col-md-2 col-lg-2 feeds">
                        <div id="trending-issues" className="row">
                            <div className="col-lg-12">
                                Trending
                            </div>
                        </div>
                        <div id="action-feed" className="row">
                            <div className="col-lg-12">
                                Action feeds
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="row bottom-bar center-xs center-md bottom-md bottom-xs">
                    <div className="col-md-12 col-xs-12">
                        Made with ♥ by <a href={'https://github.com/cassioscabral'} target={'_blank'}>@cassioscabral</a> from {"\u00a0"}
                        <img src={'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg'} alt="Brazil flag" width="30px" height="20px" title="Brazil"/>
                    </div>
                </footer>
            </AppCanvas>
        );
    }
});
