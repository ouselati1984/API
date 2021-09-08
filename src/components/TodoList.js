const TodoList = ({ todos, onUpdateTodo }) => {
  return (
    
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          
              <span>{todo.name}</span>
              <span>{todo.username}</span>
              <span>{todo.email}</span>
              <span>{todo.address.street}</span>
              <span>{todo.address.city}</span>
              
              </li>
       
      ))}
    </ul>
  );
};

export default TodoList;
