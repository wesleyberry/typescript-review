// function showToDo(todo: {title:string, text:string}) {
//     let { title, text } = todo;
//     console.log(
//     `Title: ${title}
//     Text: ${text}`);
// }


interface Todo {
    title: string;
    text: string;
}

function showToDo(todo: Todo) {
    let { title, text } = todo;
    console.log(
    `Title: ${title}
    Text: ${text}`);
}

showToDo({ title:'Groceries', text:'Go to store and buy groceries' });