
import user from '../model/userModel.js';



export const fetchById = async (req, res) => {
  try{
    const id=req.params.id;
    const user1 = await user.findOne({_id:id});
    if(!user1){
      return res.status(404).json({message:"user not found"})
  }
  await user.findById(id);
  res.status(200).json({user1});
  }catch(err){
    res.status(500).send('Error');
}
}

export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"user not found"})
        }
        await user.findByIdAndDelete(id);
        res.status(200).json({message:"user deleted successfully"}) 
    } catch (error) {
        res.status(500).json({error:"internal server errror"})


        
    }

}

export const update = async(req,res) =>{
    try{
        const id =req.params.id;
        const userExist = await user.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"user not found"})
        }
        const updateUser = await user.findByIdAndUpdate(id,req.body,
            {new:true});
        res.status(200).json({updateUser})
    }
    catch(err){
        res.status(500).json({error:"internal server errror"})
    }

}

export const create = async (req, res) => {
  try {
    let userdata = new user(req.body);
    const { email } = userdata;

    const userExist = await user.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const saveduser = await userdata.save();
    res.status(200).json({ saveduser });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.error('Error in user creation:', err);
  }
};

export const fetch = async (req, res) => {
  try {
    const user1 = await user.find();
    if(user1.length==0){
        return res.status(404).json({error:"no user found"})
    }
    res.status(200).json({user1});
  } catch (err) {
    res.status(500).send('Error');
  }
};
