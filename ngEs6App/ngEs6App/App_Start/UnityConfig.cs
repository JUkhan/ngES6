using System.Web.Mvc;
using Microsoft.Practices.Unity;
using Unity.Mvc5;
using Services.Interfaces;
using Services.Implementation;
using Jwt.Dao.EntityFramework.Interfaces;
using Jwt.Dao.EntityFramework.Implementation;

namespace ngEs6App
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            
            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<IDbContextFactory, DbContextFactory>();
            container.RegisterType<IDbContextScopeFactory, DbContextScopeFactory>();
            container.RegisterType<IStudentService, StudentService>();
            container.RegisterType<ICourseService, CourseService>();
            container.RegisterType<IEnrollmentService, EnrollmentService>();
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
           
        }
    }
}