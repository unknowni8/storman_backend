import { config } from "../utils/env_keys_util.js";

export const diagnostic = (req, res) => {
    res.json({ ok: true, environment: config.env });
}