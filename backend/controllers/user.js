import usersModel from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await usersModel.find().sort({ _id: -1 });
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await usersModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({ msg: "deleted successfully" });
  } catch (error) {
    return res.status(500).send(error);
  }
};
export const getUserId = async (req, res) => {
  try {
    const user = await usersModel.findById(req.params.id);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const updateUser = async (req, res) => {
  const { name, email, isAdmin } = req.body;

  try {
    const emailExist = await usersModel.findOne({ email: email });
    if (emailExist) {
      return res.status(400).send({ msg: "email already taken" });
    } else {
      const user = await usersModel.findByIdAndUpdate(
        req.params.id,
        {
          name,
          email,
          isAdmin,
        },
        { new: true }
      );
      res.status(200).send(user);
    }
  } catch (err) {
    console.log(err);
  }
};
