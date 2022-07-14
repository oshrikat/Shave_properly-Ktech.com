using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Giluah_Kehalaha___NEW_WEBSITE_2022
{
    public partial class RegisterPage : System.Web.UI.Page
    {

        public string error ="";
        protected void Page_Load(object sender, EventArgs e)
        {

            string firstname = Request.Form["firstname"];
            string lastname = Request.Form["lastname"];
            string email = Request.Form["email"];
            string password = Request.Form["pass"];

            string query = "SELECT * FROM RegisterData WHERE '" + firstname + "' = firstname";

         
        

            

        }
    }
}