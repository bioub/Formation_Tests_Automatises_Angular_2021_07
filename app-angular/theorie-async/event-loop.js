setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 500);
setTimeout(() => console.log('D'), 1000);

console.log('E');

// callback sync (appelée tout de suite, dans la même pile d'appel)
// [1, 2, 3].forEach(() => {})

// callback sync (appelée plus tard, dans une nouvelle pile d'appel)
// setTimeout(() => console.log('A'), 500);


// pile d'appels
// ^
// |
// |
// |
// |                               lg      lg  lg        lg
// |st - st - st - st - lg         =>      =>  =>        =>
// +-------------------------------7ms-----500-501-------1000-----------------> temps
//                      E          B       A   C         D

// file d'attente (timer) 0ms : => (log B)
// file d'attente (timer) 7ms :
// file d'attente (timer) 499ms : => (log A) => (log C)
// file d'attente (timer) 500ms : => (log C)
// file d'attente (timer) 501ms :
// file d'attente (timer) 999ms : => (log D)
// file d'attente (timer) 1000ms :
