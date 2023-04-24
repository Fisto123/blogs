import NewsModel from "../models/news.js";

export const createNews = async (req, res) => {
  try {
    const { title, details, categories, trending, coverNews, images } =
      req.body;
    const news = new NewsModel({
      userId: req.user._id,
      title,
      details,
      categories,
      trending,
      coverNews,
      images,
    });
    const savedNews = await news.save();
    return res.status(200).json(savedNews);
  } catch (error) {
    console.log(error);
  }
};

export const getLatestNews = async (req, res) => {
  try {
    const news = await NewsModel.find().sort({ _id: -1 }).limit(5);
    return res.status(200).send(news);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getTopNews = async (req, res) => {
  try {
    const news = await NewsModel.find({
      trending: true,
    })
      .sort({ _id: -1 })
      .limit(5);
    return res.status(200).send(news);
  } catch (error) {
    return res.status(500).send(error);
  }
};
export const getNewsCategory = async (req, res) => {
  const q = req.query;
  const filters = {
    ...(q.cat && { categories: { $regex: q.cat, $options: "i" } }),
  };

  try {
    const news = await NewsModel.find(filters).sort({ _id: -1 });
    if (news.length === 0) {
      res.status(404).send({ message: "No News in this category" });
    } else {
      res.status(200).send(news);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getNewsById = async (req, res) => {
  let id = req.params.id;
  try {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
      const news = await NewsModel.findById(req.params.id);
      !news
        ? res.status(404).send({ message: "news does not exist" })
        : res.status(200).send(news);
    } else {
      return res.status(404).send({ message: "news isnt valid" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
