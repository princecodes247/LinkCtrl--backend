const mongoose = require("mongoose");
const shortid = require("shortid");
const bcrypt = require("bcrypt");
const { BCRYPT_SALT } = require("./../config");
const Schema = mongoose.Schema;

const linkSchema = new Schema(
  {
    // Generate id for each link with shortId
    id: {
      type: String,
      // required: true,
      unique: true,
      default: shortid.generate(),
    },
    name: {
      type: String,
      trim: true,
      // required: [true, "Link Name is required"],
    },
    url: {
      type: String,
      trim: true,
      required: [true, "Link URL is required"],
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    tags: {
      type: [String],
      trim: true,
      default: [],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      // required: [true, "Owner is required"],
    },
    max_clicks: {
      type: Number,
      default: 0,
    },
    clicks: {
      type: [Date],
      default: [],
    },
    expires: {
      type: Date || null,
      default: null,
    },
    password: {
      type: String,
      trim: true,
      default: "",
    },

    dataTypes: {
      type: [String],
      trim: true,
      default: [],
    },
    data: {
      type: Schema.Types.Mixed,
      default: {},
    },

    isPrivate: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

linkSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const hash = await bcrypt.hash(this.password, BCRYPT_SALT);
  this.password = hash;

  next();
});

module.exports = mongoose.model("links", linkSchema);
