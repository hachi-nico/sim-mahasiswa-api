import db from "./db.js";

export const getData = (req, res) => {
  const sql = "SELECT * FROM identitas_mhs";

  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
      });
    } else if (data.length <= 0) {
      return res.status(200).json({
        status: 200,
        message: "Empty Data",
        data: [],
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Success",
        data: data,
      });
    }
  });
};

export const getDataById = (req, res) => {
  const sql = "SELECT * FROM identitas_mhs WHERE id = ?";
  const { id } = req.params;

  db.query(sql, [id], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
      });
    } else if (data.length <= 0) {
      return res.status(404).json({ status: 404, message: "Data Not Found" });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Success",
        data: data,
      });
    }
  });
};

export const addData = (req, res) => {
  const sql = "INSERT INTO identitas_mhs (nama, nrp) VALUES (?,?)";
  const { nama, nrp } = req.body;

  db.query(sql, [nama, nrp], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
      });
    } else {
      return res.status(200).json({ status: 200, message: "Success" });
    }
  });
};

export const updateData = (req, res) => {
  const sql = "UPDATE identitas_mhs SET nama = ?, nrp = ? WHERE id = ?";
  const { nama, nrp } = req.body;
  const { id } = req.params;

  db.query(sql, [nama, nrp, id], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Success",
      });
    }
  });
};

export const deleteData = (req, res) => {
  const sql = "DELETE FROM identitas_mhs WHERE id = ?";
  const { id } = req.params;

  db.query(sql, [id], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
      });
    } else {
      return res.status(200).json({ status: 200, message: "Success" });
    }
  });
};
