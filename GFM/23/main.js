
// Хранилищем будет объект, а имена задач - ключами. 

const list = {
	"create a task": "in progress",
	"make a bed": "in progress",
	"write a post": "to do",
	"write a letter": "to do",
  "housework": "done",
  }

  function showList(){
	let progresslist = '-';
  let todolist  = '-';
  let donelist  = '-';
		for (let key in list) {
		if  (list[key] === 'in progress' ) {
		  progresslist = progresslist + key + "\n";
      }
      else if (list[key] === 'to do' ) {
      todolist = todolist + key + "\n";
      }
      else {
      donelist = donelist + key + "\n";
      }
    }
    
		console.log('in progress: \n' + progresslist);
    console.log('to do: \n' + todolist);
    console.log( 'done: \n' + donelist);
	}
  
  

  function isInList(key) {
   return key in list;
   }
  
  
  //Функция addTask - добавляет новую задачу
  
  function addTask(newKey, status) {
	  if(isInList(newKey)){
		 console.log (newKey + ' такая задача уже есть в списке');
	  } else list[newKey] = status;
  }
  
  // Функция deleteTask - удаляет задачу
  function deleteTask(delKey){
	  if(!isInList(delKey)){
		  console.log (delKey + ' такой задачи нет в списке');
	  } else  delete list[delKey];
  }
  
  // Функция changeStaus - меняет статус
  
  function changeStatus(chKey, chstat){
  if (isInList(chKey)) {
 		list[chKey] = chstat;
    return;
  }
  else return console.log (chKey + ' такой задачи нет в списке');
  }
  
  
  changeStatus('write a post', 'done');
  addTask('write a number', 'to do');
  deleteTask('write a letter');
  showList();
  
  
  /*
   Функция showList будет выводить весь список дел в виде 
  to do: 
	"create a task",
	"make a bed",
  In Progress: 
	"write a post"
  Done:
	- */
  
	
  
  //Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль