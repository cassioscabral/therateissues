// App component - represents the whole app
App = React.createClass({
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
      <div className="container">
        <header>
          <h1>Rate issues</h1>

          <AccountsUIWrapper />

        </header>
        
        <main>

        </main>
      </div>
    );
  }
});
