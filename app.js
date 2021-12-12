import dotenv from "dotenv";
import express from "express";
import {
  getData,
  getDataById,
  addData,
  updateData,
  deleteData,
} from "./controller.js";

// initialize dotenv
dotenv.config();

//initialize express
const app = express();
export const router = express.Router();

router.get("/mahasiswa", getData);
router.get("/mahasiswa/:id", getDataById);
router.post("/addMahasiswa", addData);
router.put("/updateMahasiswa/:id", updateData);
router.delete("/deleteMahasiswa/:id", deleteData);

// body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`server run on port ${process.env.PORT}`)
);
