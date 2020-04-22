// импортируем модель
const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ cards }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.getCardById = (req, res) => {
  Card.findById(req.params.cardId)
    .then((card) => res.send({ card }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.send({ card }))
    .catch((err) => {
      // let a = err;
      res.status(err.status).send({ message: err.message });
    });
};

module.exports.removeCardById = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

// eslint-disable-next-line no-unused-vars
module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((like) => res.send({ data: like }))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// eslint-disable-next-line no-unused-vars
module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .then((like) => res.send({ data: like }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
