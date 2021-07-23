try {
  setTimeout(() => console.log('A'), 500);
  setTimeout(() => console.log('B'), 0);
  setTimeout(() => { throw new Error('C') }, 500);
  setTimeout(() => console.log('D'), 1000);

  console.log('E');
}
catch (err) {

}


// pile d'appels
// ^
// |
// |
// |
// |                                      lg      lg  lg        lg
// |try { st - st - st - st - lg }        =>      =>  =>        =>
// +--------------------------------------7ms-----500-501-------1000-----------------> temps
//                             E          B       A   C         D
