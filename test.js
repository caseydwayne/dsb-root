module.exports = (function(){
/*----------------------------------------------------------------------------*/
  
  var root = require('./index'),
     debug = require('dsb-debug-mini').create('root');
       self = this;
  
  debug.test( 'root is {global} or {window}', root === self );  
  
  return debug.complete();
  
/*----------------------------------------------------------------------------*/  
}());