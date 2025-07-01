const Todo = require("../model/Todo");
exports.updateTodo = async (req, res) => {
  //networking -> main thread pe network call ni krni hai like db ->main thread block ni krunga
  
  try {
    //fetch all todo items from database
     const id = req.params.id;
    //  const {id} = req.params;
     const {title,description} = req.body;
     const todo = await Todo.findByIdAndUpdate(
        {_id:id},
        {title,description,updatedAt:Date.now()},
     )
       res.status(200).json(
        {
            success:"true",
            data:todo,
            message:`Updated successfully`
        }
    )
  } catch (err) {
      console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
    //   data: "internal server error",
      message: err.message,
    });
  }
};

// exports.updateTodo = async (req,res) => {
//      try {
//      //extract todo item basis on id
//      const id = req.params.id;
//      const todo = await Todo.findById({_id:id})
//     //given id data not found
//     if(!todo){
//         return res.status(404).json(
//             {
//                 success:"false",
//                 message:`No data found with given ${id}`
//             }
//         );
//     }
//     //data for give id found
//     res.status(200).json(
//         {
//             success:"true",
//             data:todo,
//             message:`Data found with ${id} fetched successfully`
//         }
//     )
    
//   } catch (err) {
    
//     console.error(err);
//     console.log(err);
//     res.status(500).json({
//       sucsess: false,
//       data: "internal server error",
//       message: err.message,
//     });
    
//   }
// };