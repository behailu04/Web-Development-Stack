/*
        Advanced Javascript Concepts
                var | let | const
        var in javascript has scope problem. in which case it can be
        accessed out side ot the scope/ block.

        Ecmascript 6 let is used for to make scoped.

        var -> function
        let -> block scoped
        const -> constants and block scoped.

*/
function sayHello_var() {
    for (var i=0; i<5; i++) {
        console.log(i);
    }
    console.log(i);
}

sayHello_var();

function sayHello_let() {
    for (let i=0; i<5; i++) {
        console.log(i);
    }
    console.log(i);
}

sayHello_let()