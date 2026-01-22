const path = require("path");

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT");

  // Force env to be mandatory (no silent fallback)
  if (!client) {
    throw new Error("DATABASE_CLIENT is missing in environment variables");
  }

  const connections = {
    mysql: {
      connection: {
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: env.bool("DATABASE_SSL", true)
          ? { rejectUnauthorized: true }
          : false,
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },

    postgres: {
      connection: {
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: env.bool("DATABASE_SSL", false)
          ? { rejectUnauthorized: true }
          : false,
        schema: env("DATABASE_SCHEMA", "public"),
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },

    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };

  if (!connections[client]) {
    throw new Error(
      `Unsupported DATABASE_CLIENT "${client}". Use mysql / postgres / sqlite`
    );
  }

  return {
    connection: {
      client, // IMPORTANT: must be mysql / postgres / sqlite
      ...connections[client],
      acquireConnectionTimeout: env.int(
        "DATABASE_CONNECTION_TIMEOUT",
        60000
      ),
    },
  };
};
