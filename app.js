var injection = require('allcountjs');
var vcap_services = JSON.parse(process.env.VCAP_SERVICES);
var cfenv = require("cfenv");
console.log('START------->');
console.log(cfenv.getAppEnv().getService('mymongo'));
console.log('END------->');
injection.bindFactory('port', process.env.PORT || 3000);
//injection.bindFactory('dbUrl', 'mongodb://.......');
//injection.bindFactory('dbUrl', vcap_services.mlab[0].credentials.uri);
injection.bindFactory('dbUrl', cfenv.getAppEnv().getService('mymongo').credentials.uri);
injection.bindFactory('gitRepoUrl', './app-config');
var server = injection.inject('allcountServerStartup');
server.startup(function (errors) {
    if (errors) {
        throw new Error(errors.join('\n'));
    }
});
