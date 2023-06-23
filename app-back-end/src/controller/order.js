import Order from "../models/order.js";

export const create = async (req, res) => {
  try {
    const { product_id, asker_id, size, price, order_type, active, sold } =
      req.body;

    const newOrder = new Order({
      product_id,
      asker_id,
      size,
      price,
      order_type,
      active,
      sold,
    });

    const saved = await newOrder.save();

    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const getAll = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(err);
    console.log(err);
  }
};

export const update = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
export const deleteById = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
