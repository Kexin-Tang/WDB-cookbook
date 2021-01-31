let command = prompt("Enter a command.\n\'a\' -- add a list\n\'d\' -- delete a list\n\'l\' -- list the content\n\'q\' -- quit the app")
let todo = []

while (command !== 'q') {
    if (command === 'a') {
        let newTodo = prompt('Enter new todo item')
        todo.push(newTodo)
    }
    else if (command === 'd') {
        if (todo.length > 0) {
            let del = prompt('Enter the index of todo item')
            if (del < 0 || del >= todo.length) {
                alert('Overflow!')
            }
            else {
                console.log(`Delete item ${del}: ${todo[del]}`)
                todo.splice(del, 1)
            }
        }
        else {
            console.log('There is no item!')
        }
    }
    else if (command === 'l') {
        console.log('**********************')
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`)
        }
        console.log('**********************')
    }
    else {
        alert("Unknown command!")
    }

    command = prompt("Enter a command.\n\'a\' -- add a list\n\'d\' -- delete a list\n\'l\' -- list the content\n\'q\' -- quit the app")
}