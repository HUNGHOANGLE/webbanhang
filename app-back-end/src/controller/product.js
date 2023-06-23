import Product from "../models/product.js";
import slugify from "slugify";

export const create = async (req, res) => {
  try {
    const { name, brand, retail_price, release_date, description, category } =
      req.body;

    // const img_path = req.file.filename;

    const newProduct = new Product({
      name,
      slug: slugify(name),
      brand,
      retail_price,
      release_date,
      description,
      img_path: req.body.img_path,
      category,
    });

    const saved = await newProduct.save();

    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const update = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
export const deleteById = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
