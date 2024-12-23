import User from "../model/userModel.js";

export const getUser = async (req,res)=>{
    try {
        const response = await User.find();
        res.status(200).send({status: 200, message: "User successfully get" ,data: response})
    } catch (error) {
        res.status(500).send({status: 500, message:"Server error"});
    }
}

export const createUser = async (req, res) => {
  try {
    const { email, name, phone_number, date_of_birth, designation } = req.body;
    if (!email || !name || !phone_number || !date_of_birth || !designation) {
      return res
        .status(400)
        .send({ status: 400, message: "Missing required fields" });
    }
    const existUser = await User.findOne({ phone_number });
    if (existUser) {
      return res
        .status(400)
        .send({
          status: 400,
          message: "User with this phone number already exists",
        });
    }
    const user = new User({
      email,
      name,
      phone_number,
      date_of_birth,
      designation,
    });

    await user.save();
    res.status(201).send({ status: 201, message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ status: 500, message: "Server error" });
  }
};

export const deleteUser = async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        res.status(200).send({status: 200, message: "User deleted successfully", data: user});
    } catch (error) {
        res.status(500).send({status: 500, message: "Server error" });
    }
}

export const updateUser = async (req,res)=>{
    try {
    const { id } = req.params;
    const { email, name, phone_number, date_of_birth, designation } = req.body;
    const user = await User.findByIdAndUpdate(id,{ email:email, name:name, phone_number:phone_number, date_of_birth:date_of_birth, designation:designation})    
    res.status(200).send({status: 200, message: "User updated successfully", data: user});    
} catch (error) {
       res.status(500).send({status: 500, message:"server error"}); 
    }
}