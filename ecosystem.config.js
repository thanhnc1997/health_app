module.exports = {
  apps: [{
    name: "Health app",
    script: "./app.js",
    watch: true,
    instances: 1,
    exec_mode: "cluster",
    ignore_watch: ["logs", "dbs", "upload"],
    env: {
      "PORT": 3000,
    }
  }]
};