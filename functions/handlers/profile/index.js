const { db } = require("../../utils/admin");
const { formValidation } = require("../../utils/validators");

// @route: /contact/
// @desc: POST leave a contact
// @access: Public
exports.contact = (req, res) => {
  const client = {
    name: req.body.name,
    email: req.body.email,
    interest: req.body.interest,
    message: req.body.message,
    sentAt: new Date().toISOString()
  };
  const { errors, valid } = formValidation(client);
  if (!valid) return res.status(400).json({ errors });
  db.collection("clients")
    .doc(client.email)
    .set(client)
    .then(doc => {
      return res.status(202).json({
        message: `Thank you ${client.name}. I will try to feedback as soon as I can.`
      });
    })
    .catch(err => {
      return res.status(500).json({
        message: "Ups, something went wrong. Please, try again later."
      });
    });
};
