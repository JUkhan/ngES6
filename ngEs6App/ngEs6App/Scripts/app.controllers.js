
import StudentCtrl from 'Scripts/Controllers/StudentCtrl.js';
import CourseCtrl from 'Scripts/Controllers/CourseCtrl.js';
import EnrollmentCtrl from 'Scripts/Controllers/EnrollmentCtrl.js';

var moduleName='app.controllers';

angular.module(moduleName,[])
.controller('StudentCtrl', StudentCtrl)
.controller('CourseCtrl', CourseCtrl)
.controller('EnrollmentCtrl', EnrollmentCtrl);

export default moduleName;