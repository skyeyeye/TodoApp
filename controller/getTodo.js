const Todo = require("../model/Todo");
exports.getTodo = async (req, res) => {
  //networking -> main thread pe network call ni krni hai like db ->main thread block ni krunga
  
  try {
    //fetch all todo items from database
    const todos = await Todo.find({});
     res.status(200).json({
      success: true,
      data: todos,
      message: "Entry Added Successfully",
    });
  } catch (err) {
     console.error(err);
     res.status(500).json(
        {
            success:false,
            error:err.message,
            message:'Server Error',
        }
     );

    //response
    
  }
};

exports.getTodoById = async (req,res) => {
     try {
     //extract todo item basis on id
     const id = req.params.id;
     const todo = await Todo.findById({_id:id})
    //given id data not found
    if(!todo){
        return res.status(404).json(
            {
                success:"false",
                message:`No data found with given ${id}`
            }
        );
    }
    //data for give id found
    res.status(200).json(
        {
            success:"true",
            data:todo,
            message:`Data found with ${id} fetched successfully`
        }
    )
    
  } catch (err) {
    
    console.error(err);
    console.log(err);
    res.status(500).json({
      sucsess: false,
      data: "internal server error",
      message: err.message,
    });
    
  }
};