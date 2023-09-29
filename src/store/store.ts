import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Store {
	todos: { id: string; task: string; isDone: boolean }[]
	clearable: boolean
	addTodo: (todo: { id: string; task: string; isDone: boolean }) => void
	deleteTodo: (id: string) => void
	toggleTodo: (id: string) => void
	updateTodo: (id: string, task: string) => void
	clearDone: () => void
}

const checkIfClearable = (
	todos: { id: string; task: string; isDone: boolean }[]
) => {
	return todos.filter((todo) => todo.isDone).length > 0
}

const useStore = create<Store>()(
	devtools(
		persist(
			(set, get) => ({
				todos: [],
				addTodo: (todo) =>
					set((state) => ({ todos: [...state.todos, todo] })),
				deleteTodo: (id) =>
					set((state) => ({
						todos: state.todos.filter((todo) => todo.id !== id),
					})),
				updateTodo: (id, task) =>
					set((state) => ({
						todos: state.todos.map((todo) =>
							todo.id === id ? { ...todo, task: task } : todo
						),
					})),
				toggleTodo: (id) => {
					set((state) => ({
						todos: state.todos.map((todo) =>
							todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
						),
					}))
					set((state) => ({
						clearable: checkIfClearable(state.todos),
					}))
				},

				clearable: false,
				clearDone: () =>
					set((state) => ({
						todos: state.todos.filter((todo) => !todo.isDone),
						clearable: false,
					})),
			}),
			{
				name: 'todos',
			}
		)
	)
)

export default useStore
