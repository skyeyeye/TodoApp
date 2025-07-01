const Todo = require("../model/Todo");
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    // res.json({
    //   success: true,
    //   message: "Todo Deleted",
    // });
   
    res.json({
      success: true,
      data: todo,
      message: "Todo deleted successfully",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};
