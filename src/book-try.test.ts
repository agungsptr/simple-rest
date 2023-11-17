import request from "supertest";
import express, { Express } from "express";
import router from "./book.router";

describe("Book", () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use("/api", router);
  });

  it("Can get all book", async () => {
   
  });

  it("Can get all book with limit 10", async () => {
    
  });

  it("Can get book by author", async () => {
   
  });

  it("Can add book", async () => {
   
  });

  it("Can response error if create with empty body", async () => {
    
  });
});
