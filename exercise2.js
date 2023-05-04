/*
Given an aboslute route of a file (it's about Linux Sistem or based in Unix).
Make a function that simplify

Example:
        INPUT                           OUTPUT
simplifyRoute("/home/");                /home
simplifyRoute("/x/./y/../../z/");        /z
simplifyRoute("/../");                  /
simplifyRoute("/home//pruebes/");       /home/pruebes
*/

const simplifyRoute = (route) => {
    let stack = [];

    const parts = route.split('/');

    for(const part of parts){
        if(part === '..'){
            stack.pop();
        }
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