module.exports = {
    apps: [
        {
            name: 'happy-app',
            script: './start.js',
            env: {
                HOST: 'localhost',
                PORT: 4000
            }
        }
    ],
}