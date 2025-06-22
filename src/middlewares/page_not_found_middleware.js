import ErrorMsgUtil from "../utils/error_msg_util.js";

const notFound = (req, res, next) => {
    res.status(404).json({
        message: ErrorMsgUtil.PAGE_NOT_FOUND,
    });
};

export default notFound;