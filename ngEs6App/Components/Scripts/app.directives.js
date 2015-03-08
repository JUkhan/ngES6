import comInstaller from 'Scripts/Directives/comInstaller/comInstaller.js';
import dog from 'Scripts/Directives/dog/dog.js';
import jwtFilter from 'Scripts/Directives/jwtFilter/jwtFilter.js';
import mac from 'Scripts/Directives/mac/mac.js';
import testProduct from 'Scripts/Directives/testProduct/testProduct.js';


var moduleName='app.Directives';

angular.module(moduleName, [])
.directive('comInstaller', comInstaller.builder)
.directive('dog', dog.builder)
.directive('jwtFilter', jwtFilter.builder)
.directive('mac', mac.builder)
.directive('testProduct', testProduct.builder)
;

export default moduleName;