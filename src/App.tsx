// build a todo app with typescript and react

const todos = [
	{
		id: 1,
		todo: 'lunch',
		isDone: false,
	},
	{
		id: 2,
		todo: 'dinner',
		isDone: false,
	},
	{
		id: 3,
		todo: 'breakfast',
		isDone: false,
	},
]

function App() {
	return (
		<div className='App'>
			<h1>Todo App</h1>
			<input type='text' />
			<button>Submit</button>
			<div>
				<ul>
					{todos.map((todo) => (
						<div key={todo.id}>
							<input type='checkbox' />
							<button>Delete</button>
							<li key={todo.id}>{todo.todo}</li>
						</div>
					))}
				</ul>
			</div>
		</div>
	)
}

export default App
