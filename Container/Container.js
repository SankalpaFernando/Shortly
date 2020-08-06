const {awilix,createContainer,asClass,asFunction,asValue} = require('awilix');
const Application = require('./Application');
const Routes = require('../Routes/route');
const container = createContainer();

container.register({
    application : asClass(Application),
    routes:asFunction(Routes)
})


module.exports =container