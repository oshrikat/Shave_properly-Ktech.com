using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Giluah_Kehalaha___NEW_WEBSITE_2022
{
    public partial class Contact_Us : System.Web.UI.Page
    {
        public string Acount = "";
        protected void Page_Load(object sender, EventArgs e)
        {




            if (Session["firstname"] == null)
            {
                Acount = "  שלום אורח !";
            }

            else
            {
                Acount += Session["firstname"] + " / <a  href=LogOut.aspx style=color:white text-decoration:overline>   &nbsp;  התנתקות      </a>  ";



            }



        }
    }
}