const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = config => {
    config.output = {
        ...config.output,
        publicPath: 'https://localhost:4300/',
    }
    config.optimization.runtimeChunk = false; // required for MF to work
    config.entry = {
        ...config.entry,
        noInternet: './setPublicPath.js' // entry name matches MF plugin name
    }

    config.plugins.push(
        new ModuleFederationPlugin({
            name: "noInternet",
            filename: "remoteEntry.js",
            exposes: {
                // the "./" in the begining is important because on host, any imports from './NoInternetModule' will 
                // behave as if it's importing the remote module.
                './NoInternetModule': './src/app/components/no-internet/no-internet-federated.module.ts',
            },
            shared: {
                "@angular/core": { strictVersion: true, requiredVersion: ">=14.1.0", singleton: true },
                "@angular/common": { strictVersion: true, requiredVersion: ">=14.1.0", singleton: true },
                "@angular/common/http": { strictVersion: true, requiredVersion: ">=14.1.0", singleton: true },
                "@angular/router": { strictVersion: true, requiredVersion: ">=14.1.0", singleton: true },

                "@angular/compiler": { strictVersion: true, requiredVersion: ">=14.1.0", singleton: true },
                "@angular/cdk": { strictVersion: true, requiredVersion: ">=14.1.0", singleton: true },

                "@angular/animations": { strictVersion: true, requiredVersion: ">=14.1.0", singleton: true },
                "@angular/platform-browser": { strictVersion: true, requiredVersion: ">=14.1.0", singleton: true },
                "@angular/platform-browser-dynamic": { strictVersion: true, requiredVersion: ">=14.1.0", singleton: true },
            }
        }),
    );

    return config;
}