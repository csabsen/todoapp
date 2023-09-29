import { Header, TodoList, ClearDone, AddTodo } from '@/components'
import * as Styled from './styled'

const Todo = () => {
	return (
		<Styled.AppContainer>
			<Styled.AppWrapper>
				<Header />
				<AddTodo />
				<TodoList />
				<ClearDone />
			</Styled.AppWrapper>
		</Styled.AppContainer>
	)
}

export default Todo
