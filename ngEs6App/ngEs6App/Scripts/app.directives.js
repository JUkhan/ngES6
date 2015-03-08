import mac from 'Scripts/Directives/mac/mac.js';
import testProduct from 'Scripts/Directives/testProduct/testProduct.js';


var moduleName='app.Directives';

angular.module(moduleName, [])
.directive('mac', mac.builder)
.directive('testProduct', testProduct.builder)
;

export default moduleName;