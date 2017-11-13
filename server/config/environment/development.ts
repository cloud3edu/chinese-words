// Development specific configuration

export const config = {
  port: 8080,
  mongodb: {
    uri: "mongodb://127.0.0.1/chinese-app",
    options: {
      user: 'word-app-user',
      pass: 'TsHb&208EQ'
    }
  },

  logger: {
    path: "/data/log/nodejs-app.log",
    level: "DEBUG"
  },

  redis: {
    port: 6379,
    host: "localhost",
    passwd: "password"
  }
}
