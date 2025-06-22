import { createServer } from './src/app.js';
import { config } from './src/utils/env_keys_util.js';
import pool from './src/configs/db_config.js'
import { logger } from './src/configs/logger_config.js';

const server = createServer();

try {
    await pool.connect({
        host: config.db_host,
        port: config.db_port,
        user: config.db_user,
        password: config.db_password,
        database: config.db_name
    });
} catch (error) {
    logger.error(error);
} finally {
    pool.close();
}
server.listen(config.port, () => {
    console.log(`🚀 Server is running on ${config.port}`);
});