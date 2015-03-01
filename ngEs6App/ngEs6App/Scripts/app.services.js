
import StudentSvc from 'Scripts/Services/StudentSvc.js';
import CourseSvc from 'Scripts/Services/CourseSvc.js';
import EnrollmentSvc from 'Scripts/Services/EnrollmentSvc.js';

var moduleName='app.services';

angular.module(moduleName,[])
.factory('StudentSvc', StudentSvc)
.factory('CourseSvc', CourseSvc)
.factory('EnrollmentSvc', EnrollmentSvc);

export default moduleName;