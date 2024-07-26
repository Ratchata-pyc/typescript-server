import { Request, Response } from "express";

const notFoundHanlder = (req: Request, res: Response) => {
  res.status(404).json({ message: "Resource not found on this server" });
};

export default notFoundHanlder;
