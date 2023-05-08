/*
Statement:
    Given an aboslute route of a file (it's about Linux Sistem or based in Unix).
    Make a function that simplify

    Example:
            INPUT                           OUTPUT
    simplifyRoute("/home/");                /home
    simplifyRoute("/x/./y/../../z/");        /z
    simplifyRoute("/../");                  /
    simplifyRoute("/home//pruebes/");       /home/pruebes
*/

//Make a function with the route
const simplifyRoute = (route) => {
    
    //Make variable Stack for storing parts of the route
    let stack = [];

    //Split the route in its diferent parts using the separator '/'
    const parts = route.split('/');

    //Go through each part
    for(const part of parts){

        //If part is '..' remove the last element in the Stack
        if(part === '..'){
            stack.pop();
        }

        //If part is diferent to '.' or a void string save it in the Stack
        else if(part !== '.' && part !== ''){
            stack.push(part);
        }
    }
    return '/' + stack.join('/');
}

console.log(simplifyRoute("/home/"));
console.log(simplifyRoute("/x/./y/../../z/"));
console.log(simplifyRoute("/../"));
console.log(simplifyRoute("/home//pruebes/"));