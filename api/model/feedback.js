const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({

    feedbackFrom: { type: mongoose.Schema.Types.ObjectId,ref : "User",required: true },
    feedbackTo: { type: mongoose.Schema.Types.ObjectId,ref : "User",required: true },
    feedback: { type: String, required: true },
    feedbackDate: { type: String, required: true },
   
  });

  const feedbackschema = mongoose.model('feedbackschema', FeedbackSchema);

  module.exports = feedbackschema;
