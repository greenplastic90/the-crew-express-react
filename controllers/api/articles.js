const Article = require('../../models/article');

module.exports = {
  index,
  show,
  create,
  update,
  delete: deleteOne
};

async function index(_req, res) {
  const articles = await Article.find({});
  res.status(200).json(articles);
}

async function show(req, res) {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json(article);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: false}
    );
    res.status(200).json(updatedArticle);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteOne(req, res) {
  try {
    const deletedArticle = await Article.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedArticle);
  } catch (err) {
    res.status(400).json(err);
  }
}
