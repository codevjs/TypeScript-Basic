// import './example/variable_&_dataType';
// import './example/function_&_dataType';
// import './example/class_in_typescript'
// import './example/abstract_class'
// import './example/generic_class';
import Macbook from "./example/module/macbook";

const macbook  = new Macbook('Macbook pro', "md101", false, true);

macbook.powerOn();

console.log(macbook.power);
