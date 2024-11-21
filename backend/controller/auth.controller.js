import { User } from "../models/user.model.js";
const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    // Check if user is already exsist

    const user = await User.findOne({ clerkId: id });

    if (!user) {
      //signUp

      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }

    res.status(200).json({
      success: true,
      id: id,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (error) {
    console.log("Error in auth callback", error);
    res.status(500).json({
      success: false,
      id: id,
      firstName: firstName,
      lastName: lastName,
    });
  }
};
