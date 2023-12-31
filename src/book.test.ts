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
    const req = await request(app).get("/api/book");
    const actual = 90;

    expect(req.statusCode).toBe(200);
    expect(req.body.data.length).toEqual(actual);
  });

  it("Can get all book with limit 10", async () => {
    const req = await request(app).get("/api/book").query({ limit: 10 });
    const actual = 10;

    expect(req.statusCode).toBe(200);
    expect(req.body.data.length).toEqual(actual);
  });

  it("Can get book by author", async () => {
    const author = "William Shakespeare";
    const req = await request(app).get(`/api/book/${author}`);
    const actual = 3;

    expect(req.statusCode).toBe(200);
    expect(req.body.data.length).toBe(actual);
    expect(req.body.data[0].author).toBe(author);
  });

  it("Can add book", async () => {
    const req = await request(app).post("/api/book").send({
      author: "Agung Saputra",
      country: "Indonesia",
      imageLink: "images/gambar.jpg",
      language: "Indonesia",
      link: "https://en.wikipedia.org/wiki/agungsptr",
      pages: 111,
      title: "The Little Thing Called Code",
      year: 2003,
    });

    expect(req.statusCode).toBe(200);
  });

  it("Can response error if create with empty body", async () => {
    const req = await request(app).post("/api/book");
    
    expect(req.statusCode).toBe(400);
  });
});
