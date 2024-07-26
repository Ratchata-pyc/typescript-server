"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundHanlder = (req, res) => {
    res.status(404).json({ message: "Resource not found on this server" });
};
exports.default = notFoundHanlder;
