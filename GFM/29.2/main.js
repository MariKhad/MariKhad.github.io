const TO_DO = 'To Do';
const IN_PROGRESS = 'In Progress';
const DONE = 'Done';
const HIGH = 'high';
const LOW = 'low';


const tasks = [
	{
		id: 1,
		nam: 'create a post',
		stat: TO_DO,
		priority: LOW,
	},
	{
		id: 2,
		nam: 'make a test',
		stat: DONE,
		priority: LOW,
	},

	{
		id: 3,
		nam: 'make a bed',
		stat: IN_PROGRESS,
		priority: LOW,
	},

	{
		id: 4,
		nam: 'write a post',
		stat: DONE,
		priority: HIGH,
	},

	{
		id: 5,
		nam: 'write a letter',
		stat: TO_DO,
		priority: HIGH,
	},
]


function showList() {
	let progressTasks = '-';
	let todoTasks = '-';
	let doneTasks = '-';
	for (let item of tasks) {
		if (item.stat === IN_PROGRESS) {
			progressTasks = progressTasks + item.nam + "\n";
		}
		else if (item.stat === TO_DO) {
			todoTasks = todoTasks + item.nam + "\n";
		}
		else {
			doneTasks = doneTasks + item.nam + "\n";
		}
	}

	console.log('in progress: \n' + progressTasks);
	console.log('to do: \n' + todoTasks);
	console.log('done: \n' + doneTasks);
}

const isStatusValid = (stat === TO_DO || stat === IN_PROGRESS || stat === DONE);
const isPriorityValid = (prior === HIGH || prior === LOW);


function addTask(task, status, prior) {
	if (!isStatusValid) {
		stat = TO_DO;
	}
	if (!isPriorityValid) {
		prior = LOW;
	}
	tasks.push(
		{
			id: tasks.length + 1,
			nam: task,
			stat: status,
			pritority: prior,
		})

}

/*
function deleteTask(delKey) {
	if (!isInList(delKey)) {
		console.log(delKey + ' такой задачи нет в списке');
	} else delete list[delKey];
}


function changeStatus(chKey, chstat) {
	if (isInList(chKey)) {
		list[chKey] = chstat;
		return;
	}
	else return console.log(chKey + ' такой задачи нет в списке');
}

changeStatus('write a post', 'done');
deleteTask('write a letter'); * /
addTask('write a number');
showList();


