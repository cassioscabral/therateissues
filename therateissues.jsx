if (Meteor.isClient) {
    Meteor.startup(function () {

        // Meteor.loginWithGithub({
        //     requestPermissions: ['user', 'public_repo', 'gist']
        // }, function (err) {
        //     if (err)
        //     Session.set('errorMessage', err.reason || 'Unknown error');
        // });
        // Use Meteor.startup to render the component after the page is ready
        // React.render(<App />, document.getElementById("render-target"));
        injectTapEventPlugin();
        React.render(<App/>, document.body);
    });
}

if (Meteor.isServer) {
    ServiceConfiguration.configurations.upsert(
        { service: "github" },
        {
            $set: {
                clientId: "8a55b26ce2d3509b7cf4",
                loginStyle: "popup",
                secret: "343b9a2da5af976443f6d26e0a4edf85be18d9c8"
            }
        }
    );
}

Meteor.methods({

});
