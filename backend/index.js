import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//Models
import Project from "./models/Project.js";

dotenv.config();

const app = express();
app.use(cors());

//MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const schema = buildSchema(`
    type Project {
    id: ID!
    name: String!
    description: String!
    imageUrl: String
    }
    type Query {
    projects: [Project]
    }
    `);

const root = {
  projects: async () => {
    try {
      const projects = await Project.find();
      return projects.map((project) => ({
        id: project._id.toString(),
        name: project.name,
        description: project.description,
        imageUrl: project.imageUrl,
      }));
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  },
};

app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving projects" });
  }
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
