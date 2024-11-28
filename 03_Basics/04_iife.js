// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();    //()()  to directly execute function without calling it 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('tanya')