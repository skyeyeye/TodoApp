//import schema
const Todo = require("../model/Todo");
//define Route Handler -> path se mapped hai controller

exports.createTodo = async (req, res) => {
  //networking -> main thread pe network call ni krni hai like db ->main thread block ni krunga
  try {
    //extract title and description from request body
    //
    const { title, description } = req.body;
    //title aur desc aagyi
    //2-> createToDo API -> Todo ka object create krega usme title aur desc daalega aur usko db me insert krega
    const response = await Todo.create({ title, description }); //create->insert into object
    //Send json response with success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
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
// module.exports = createTodo
 