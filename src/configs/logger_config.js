import { createLogger, format, transports } from "winston";
import { config } from "../utils/env_keys_util.js";
const { combine, prettyPrint } = format;

const logLevels = {
    error: 0,
    warning: 1,
    info: 2,
    http: 3,
    debug: 4,
};

const logFormat = combine(
    format.errors({ stack: true }),
    prettyPrint(),
);
export const logger = createLogger({
    level: config.logLevel,
    levels: logLevels,
    format: logFormat,
    transports: [
        new transports.Console(),
    ],
});