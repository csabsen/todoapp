import TodoItem from '../todoItem/TodoItem'
import useStore from '../../store/store'
import * as Styled from './styled'

const TodoList = () => {
	const todos = useStore((state) => state.todos)

	return (
		<Styled.TodoContainer>
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</Styled.TodoContainer>
	)
}

export default TodoList
