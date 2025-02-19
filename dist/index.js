"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const error_1 = __importDefault(require("./middlewares/error"));
const todo_route_1 = __importDefault(require("./routes/todo-route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/todos", todo_route_1.default);
app.use(notFound_1.default);
app.use(error_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
