using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ngEs6App.Startup))]
namespace ngEs6App
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
