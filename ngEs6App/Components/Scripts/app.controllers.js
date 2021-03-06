
import MacWidget from 'Scripts/Components/MacWidget/MacWidgetCtrl.js';
import jwtFilterWidget from 'Scripts/Components/jwtFilterWidget/jwtFilterWidgetCtrl.js';
import dogWidget from 'Scripts/Components/dogWidget/dogWidgetCtrl.js';
import testProduct from 'Scripts/Components/testProduct/testProductCtrl.js';
import root from 'Scripts/Layouts/root/rootCtrl.js';

var moduleName='app.controllers';

angular.module(moduleName,[])
.controller('MacWidgetCtrl', MacWidget)
.controller('jwtFilterWidgetCtrl', jwtFilterWidget)
.controller('dogWidgetCtrl', dogWidget)
.controller('testProductCtrl', testProduct)
.controller('rootCtrl', root);

export default moduleName;