import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    userId: { type: String },
    title: { type: String, minlength: 20, maxlength: 120, required: true },
    details: { type: String, required: true },
    categories: {
      type: String,
      required: true,
      enum: [
        "Sports",
        "2023 Elections",
        "Politics",
        "Business",
        "Healthwise",
        "Tech",
        "News",
        "Entertainement",
        "Family",
        "Specials",
        "Education",
      ],
    },
    images: {
      type: [String],
    },
    trending: { type: Boolean, default: false },
    coverNews: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);

export default News;
