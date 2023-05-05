import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then(response => {
	const todo = response.data as Todo;

	let id = todo.id;
	let title = todo.title;
	let completed = todo.completed;

	logTodo(id, title, completed);

});

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`
	The Todo with ID: ${id}
	Has the Title of: ${title}
	Is it completed?: ${completed}
	`);
}