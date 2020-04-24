// импортируем модель
const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ users }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => res.send({ user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.removeUserdById = (req, res) => {
  Card.findByIdAndRemove(req.params.userId)
    .then((user) => res.send({ user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.updateUser = (req, res) => {
  // eslint-disable-next-line max-len
  User.findByIdAndUpdate(req.user._id, { name: req.body.name, about: req.body.about }, { new: true })
    .then((updatedUser) => res.send({ data: updatedUser }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.updateAvatarUser = (req, res) => {
  // eslint-disable-next-line max-len
  User.findByIdAndUpdate(req.user._id, { avatar: req.body.avatar }, { new: true })
    .then((updatedAvatarUser) => res.send({ data: updatedAvatarUser }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
