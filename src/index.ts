import "dotenv/config";
import express from "express";
import cors from "cors";
import notFoundHanlder from "./middlewares/notFound";
import errorhandler from "./middlewares/error";
import todoRoutes from "./routes/todo-route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todo", todoRoutes);

app.use(notFoundHanlder);
app.use(errorhandler);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));
