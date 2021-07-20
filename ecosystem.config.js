module.exports = {
  apps: [
    {
      name: "server",
      script: "npm",
      args: "start",
      instance_var: "INSTANCE_ID",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      max_memory_restart: "1G",
      watch: true,
      env: {
        DATABASE_HOST: "localhost",
        HOST: "0.0.0.0",
        NODE_ENV: "production",
      },
    },
  ],
};
