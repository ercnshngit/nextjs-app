export default function CardList({ todos }) {
  return (
    <ul>
        {todos && todos.map((todo) => {            
            return (
                <li key={todo.id}
                className="mx-auto my-4 border-2 border-l-green-500 rounded shadow p-4 items-start relative flex flex-col overflow-clip"
                >
                    <div className="w-full flex justify-between">
                        <span className="text-lg font-bold">{todo.title}</span>
                        <button className="button-base" onClick={() => deleteDocument(todo.id)}>X</button>

                    </div>
                    <span className="text-lg ml-auto mt-3 ">{todo.body}</span>
                </li>
            )
        })}
    </ul>
  )
}