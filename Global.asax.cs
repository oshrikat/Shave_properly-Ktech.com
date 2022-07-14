using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace Giluah_Kehalaha___NEW_WEBSITE_2022
{
    public class Global : System.Web.HttpApplication
    {
        protected void Application_Start(object sender, EventArgs e)
        {
            Application["justCosher"] = 0;
            Application["rigorousChoser"] = 0;
            Application["dontmind"] = 0;
           
        }
    }
}