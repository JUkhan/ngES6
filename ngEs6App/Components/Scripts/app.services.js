
import MacWidget from 'Scripts/Components/MacWidget/MacWidgetSvc.js';
import jwtFilterWidget from 'Scripts/Components/jwtFilterWidget/jwtFilterWidgetSvc.js';
import dogWidget from 'Scripts/Components/dogWidget/dogWidgetSvc.js';
import testProduct from 'Scripts/Components/testProduct/testProductSvc.js';

var moduleName='app.services';

angular.module(moduleName,[])
.factory('MacWidgetSvc', MacWidget)
.factory('jwtFilterWidgetSvc', jwtFilterWidget)
.factory('dogWidgetSvc', dogWidget)
.factory('testProductSvc', testProduct);

export default moduleName;