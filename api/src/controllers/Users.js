var db = require("../services/connect");

const saveEtudiant = (req, res) => {
  const values = [req.body.noms, req.body.postnom];
  const sql = "insert into t_etudiant (noms,postnom) values(?)";

  db.query(sql, [values], (err, result) => {
    if (err) return res.status(200).json(err);
    return res.status(200).json("inserted successfully");
  });
};

const UpdateEtudiant = (req, res) => {
  const values = [req.body.noms, req.body.postnom];

  const sql = "update t_etudiant set noms=?,postnom=? where id=?";

  db.query(sql, [...values, req.params.id], (err, result) => {
    if (err) return res.status(200).json(err);
    return res.status(200).json("updated successfully");
  });
};


const deleteEtudiant = (req, res) => {
  const id = req.params.id;

  const sql = "delete from t_etudiant  where id=?";
  db.query(sql, [id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("deleted successfully");
  });
};

const getEtudiant = (req, res) => {
  const sql = "select * from t_etudiant";
  db.query(sql, (err, result) => {
    if (err) return res.status(200).json(err);

    return res.send(result);
  });
};

const getSingleEtudiant = (req, res) => {
  const sqlselect = "select * from t_etudiant where id=?";
  const id = req.params.id;
  db.query(sqlselect, [id], (err, result) => {
    res.send(result);
  });
};

module.exports = {
  saveEtudiant,
  deleteEtudiant,
  UpdateEtudiant,
  getEtudiant,
  getSingleEtudiant
};
