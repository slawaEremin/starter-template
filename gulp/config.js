
var devEnv = (process.env.NODE_ENV !== "production"),
    config = {
        isDev: devEnv,
        src: devEnv ? '.tmp/' : 'dist/'
    };

module.exports = config;