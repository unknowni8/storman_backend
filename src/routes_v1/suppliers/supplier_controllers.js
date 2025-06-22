import tryCatchUtil from "../../utils/try_catch_util.js";

export const suppliersList = tryCatchUtil(async (req, res) => {
    return res.send({ data: 'supplier' });
});

