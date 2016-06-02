module.exports = function (wallaby) {
    return {
        files: [
            { pattern: 'node_modules/systemjs/dist/system.js', instrument: false },
            { pattern: 'config.js', instrument: false },
            { pattern: 'scripts/app/*.ts', load: false },
        ],

        tests: [
            { pattern: 'scripts/tests/systemts.spec.ts', load: false }
        ],

        compilers: {
            'scripts/*/*.ts': wallaby.compilers.typeScript({
                "module": 'system', // or amd
                "emitDecoratorMetadata": true,
                "experimentalDecorators": true,
                "noImplicitAny": false
            })
        },

        middleware: (app, express) => {
            app.use('/node_modules',
                express.static(
                    require('path').join(__dirname, 'node_modules')));
        },

        setup: function (wallaby) {
            wallaby.delayStart();

            System.config({
                defaultJSExtensions: true
            });

            var promises = [];
            for (var i = 0, len = wallaby.tests.length; i < len; i++) {
                promises.push(System['import'](wallaby.tests[i].replace(/\.js$/, '')));
            }

            Promise.all(promises).then(function () {
                wallaby.start();
            }).catch(function (e) { setTimeout(function () { throw e; }, 0); });
        },
        debug: true
    };
};
