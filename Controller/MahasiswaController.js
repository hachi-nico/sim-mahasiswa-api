const db = require("../db.js");

// 0: error, 1: berhasil, 2: data kosong
// "0" untuk null safety
const getDataMhs = (req, res) => {
  const sql = "SELECT id, nama, nrp FROM mahasiswa";

  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).json({
        status: 0,
        message: "Gagal menghubungi server",
        error: err,
      });
    } else if (data.length <= 0) {
      return res.status(200).json({
        status: 2,
        message: "Data Kosong",
        data: "0",
      });
    } else {
      return res.status(200).json({
        status: 1,
        message: "Berhasil menghubungi server",
        data: data.reverse(),
      });
    }
  });
};

const getDataMhsById = (req, res) => {
  const sqlMhs = "SELECT id, nama, nrp FROM mahasiswa WHERE id = ?;";
  const sqlMk = "SELECT id_mk, nama_mk FROM matkul WHERE id_mhs = ?";
  const { id } = req.params;

  db.query(sqlMhs + sqlMk, [id, id], (err, data) => {
    if (err) {
      return res.status(500).json({
        status: 0,
        message: "Gagal menghubungi server",
        error: err,
      });
    } else if (data.length <= 0) {
      return res.status(200).json({
        status: 2,
        message: "Data tidak ditemukan",
        data: "0",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "Success",
        dataMhs: data[0][0],
        dataMatkul: data[1].reverse(),
      });
    }
  });
};

const addDataMhs = (req, res) => {
  const sql = "INSERT INTO mahasiswa (nama, nrp) VALUES (?,?)";
  const { nama, nrp } = req.body;

  db.query(sql, [nama, nrp], (err, data) => {
    if (err) {
      return res.status(500).json({
        status: 0,
        message: "Gagal menghubungi server",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: 1,
        message: "Berhasil menghubungi server",
      });
    }
  });
};

const updateDataMhs = (req, res) => {
  const sql = "UPDATE mahasiswa SET nama = ?, nrp = ? WHERE id = ?";
  const { nama, nrp } = req.body;
  const { id } = req.params;

  db.query(sql, [nama, nrp, id], (err, data) => {
    if (err) {
      return res.status(500).json({
        status: 0,
        message: "Gagal menghubungi server",
        error: err,
      });
    } else {
      return res.status(200).json({
        status: 1,
        message: "Berhasil menghubungi server",
      });
    }
  });
};

const deleteDataMhs = (req, res) => {
  const sql = "DELETE FROM mahasiswa WHERE id = ?";
  const { id } = req.params;

  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.status(500).json({
        status: 0,
        message: "Gagal menghubungi server",
        error: err,
      });
    } else if (data.affectedRows != 0) {
      return res.status(200).json({
        status: 1,
        message: "Berhasil menghubungi server",
      });
    } else {
      return res.status(200).json({
        status: 2,
        message: "Tidak ada data yang terhapus",
      });
    }
  });
};

module.exports = {
  getDataMhs,
  getDataMhsById,
  addDataMhs,
  updateDataMhs,
  deleteDataMhs,
};
