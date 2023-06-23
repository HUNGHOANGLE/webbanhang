import Authenticate from "../models/authenticate.js";

export const create = async (req, res) => {
  try {
    const { product_id, asker_id, taker_id, size, price } = req.body;

    const newAuth = new Authenticate({
      product_id,
      asker_id,
      taker_id,
      size,
      price,
      fee: (3 * price) / 100,
      status: "Chờ xác nhận",
      active: true,
    });

    const saved = await newAuth.save();

    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const getAll = async (req, res) => {
  try {
    const auths = await Authenticate.find();
    res.status(200).json(auths);
  } catch (error) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const update = async (req, res) => {
  try {
    const auth = await Authenticate.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(auth);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
export const deleteById = async (req, res) => {
  try {
    await Follow.Authenticate(req.params.id);
    res.status(200).json("Has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
