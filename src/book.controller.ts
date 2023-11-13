import book from "./data.json";
import { Request, Response } from "express";
import fs from "fs";

function getBook(req: Request, res: Response) {
  const limit = req.query.limit ?? 100;
  const data = book.slice(0, Number(limit));
  res.status(200).send({
    statusCode: 200,
    status: "Success",
    message: "List of books",
    data,
  });
}

function getBookByAuthor(req: Request, res: Response) {
  const { author } = req.params;
  const data = book;
  const result = data.filter((b) => b.author === author);
  res.status(200).send({
    statusCode: 200,
    status: "Success",
    data: result,
  });
}

function addBook(req: Request, res: Response) {
  const { body } = req;
  
  if (Object.keys(body).length === 0) {
    res.status(400).send({
      statusCode: 400,
      status: "Bad Request",
      message: "Empty body",
    });
    return;
  }

  const data = book;
  data.push(body);
  fs.writeFileSync(`${__dirname}/data.json`, JSON.stringify(data));

  res.status(200).send({
    statusCode: 200,
    status: "Success",
    message: "Successful add book",
  });
}

export { getBook, addBook, getBookByAuthor };
