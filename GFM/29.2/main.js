Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore

@MariKhad
MariKhad
	/
	MariKhad.github.io
Public
1
01
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
MariKhad.github.io / GFM / 29.2 / main.js /
@MariKhad
MariKhad Корявый todo готов 2
Latest commit 483e4e9 2 hours ago
History
1 contributor
173 lines(141 sloc)  2.78 KB

const TO_DO = 'To Do';
const IN_PROGRESS = 'In Progress';
const DONE = 'Done';
const HIGH = 'high';
const LOW = 'low';
let lastId = 5;



const tasks = [
	{
		id: 1,
		name: 'create a post',
		status: TO_DO,
		priority: LOW,
	},
	{
		id: 2,
		name: 'make a test',
		status: TO_DO,
		priority: LOW,
	},

	{
		id: 3,
		name: 'make a bed',
		status: IN_PROGRESS,
		priority: LOW,
	},

	{
		id: 4,
		name: 'write an email',
		status: IN_PROGRESS,
		priority: HIGH,
	},

	{
		id: 5,
		name: 'write a letter',
		status: TO_DO,
		priority: HIGH,
	},
]


function showBy(method) {
	if (method === 'status') {
		let progressTasks = '';
		let todoTasks = '';
		let doneTasks = '';
		for (let item of tasks) {
			if (item.status === IN_PROGRESS) {
				progressTasks = progressTasks + item.name + "\n";
			}
			else if (item.status === TO_DO) {
				todoTasks = todoTasks + item.name + "\n";
			}
			else {
				doneTasks = doneTasks + item.name + "\n";
			}
		}
		if (progressTasks === '') {
			progressTasks = '-';
		}

		if (todoTasks === '') {
			todoTasks = '-';
		}

		if (doneTasks === '') {
			doneTasks = '-';
		}
		console.log('in progress: \n' + progressTasks);
		console.log('to do: \n' + todoTasks);
		console.log('done: \n' + doneTasks);
	}

	if (method === 'priority') {
		let highPriorityTasks = '';
		let lowPriorityTasks = '';
		for (let item of tasks) {
			if (item.priority === HIGH) {
				highPriorityTasks = highPriorityTasks + item.name + "\n";
			}
			else {
				lowPriorityTasks = lowPriorityTasks + item.name + "\n";
			}

			if (highPriorityTasks === '') {
				highPriorityTasks = '-';
			}

			if (lowPriorityTasks === '') {
				lowPriorityTasks = '-';
			}

			console.log('High priority: \n' + highPriorityTasks);
			console.log('Low priority: \n' + lowPriorityTasks);
		}
	}
}

function isStatusValid(status) {
	if (status === TO_DO || status === IN_PROGRESS || status === DONE)
		return true;
}

function isPriorityValid(priority) {
	if (priority === HIGH || priority === LOW) {
		return true;
	}
}


function addTask(name, status, priority) {
	if (!isStatusValid(status)) {
		status = TO_DO;
	}
	if (!isPriorityValid(priority)) {
		priority = LOW;
	}
	lastId++;
	tasks.push(
		{
			id: lastId,
			name,
			status,
			priority,
		})

}






function deleteTask(id) {
	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i].id === id) {
			tasks.splice(i, 1);
		}
	}
}


function changeStatus(id, status) {
	for (let item of tasks)
		if (item.id === id) {
			item.status = status;
			break;
		}
}

function changePriority(id, priority) {
	for (let item of tasks)
		if (item.id === id) {
			item.priority = priority;
			break;
		}

}

changeStatus(4, DONE);
deleteTask(1);
changePriority(5, LOW);
addTask('write a book', IN_PROGRESS, HIGH);
addTask('housework', IN_PROGRESS, LOW);
showBy('status');
showBy('priority');


