using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Giluah_Kehalaha___NEW_WEBSITE_2022
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string firstname = Request.Form["one"];
            string lastname = Request.Form["two"];
            string email = Request.Form["three"];
            string number = Request.Form["four"];
            string comment = Request.Form["comment"];

            string query = "INSERT INTO ContactData VALUES('" + firstname + "','" + lastname + "','" + email + "','" + number + "','" + comment + "')";
            DataBaseCode.DoQuery(query);
            Response.Write("your first- name is: " + firstname);
            Response.Write("your last- name is: " + lastname);
            Response.Write("your email is: " + email);
            Response.Write("your number is: " + number);
            Response.Write("your comment is: " + comment);
            Response.Redirect("Home_Page.aspx");

        }
    }
}
