// function showToDo(todo: {title:string, text:string}) {
//     let { title, text } = todo;
//     console.log(
//     `Title: ${title}
//     Text: ${text}`);
// }
function showToDo(todo) {
    var title = todo.title, text = todo.text;
    console.log("Title: " + title + "\n    Text: " + text);
}
showToDo({ title: 'Groceries', text: 'Go to store and buy groceries' });
