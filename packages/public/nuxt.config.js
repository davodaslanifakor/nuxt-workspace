const {resolve} = require("path");
export default {
    modulesDir: ['../../node_modules'],
    alias: {
        '@design-system': resolve(__dirname, '../../node_modules/@app/system-design'),
    }
}