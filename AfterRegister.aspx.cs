using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Giluah_Kehalaha___NEW_WEBSITE_2022
{
    public partial class AfterRegister : System.Web.UI.Page
    {
        public string Acount = "";
        public string error = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            string firstname = Request.Form["firstname"];
            string lastname = Request.Form["lastname"];
            string pass = Request.Form["pass"];
            string email = Request.Form["email"];




            string query = "SELECT * FROM RegisterAndConnectData WHERE '" + firstname + "' = firstname";
            if (RegisterDataBaseCode.IsExist(query) == false)
            {
                query = "INSERT INTO RegisterAndConnectData VALUES('" + firstname + "','" + lastname + "','" + pass + "','" + email + "')";
                RegisterDataBaseCode.DoQuery(query);
                Session["firstname"] = firstname;
                Response.Redirect("User_HomePage.aspx");

            }
            else
            {
              
                Response.Redirect("ConnectingUser.aspx");
            }

















            //bool exist = RegisterDataBaseCode.IsExist(query1);

            //if (exist == true)
            //{

            //    Response.Redirect("RegisterPage.aspx");
            //      AlreadyExist = "משתמש זה כבר קיים";

            //}
            //else
            //{
            //    Session["firstname"] = firstname;
            //    Response.Redirect("Home_Page.aspx");
            //}

            //string query1 = "SELECT * FROM RegisterData WHERE '" + email + "' =email   ";
            //if ( RegisterDataBaseCode.IsExist(query1) == false)
            //{
            //    string query = "INSERT INTO RegisterData VALUES('" + firstname + "','" + lastname + "','" + email + "','" + pass + "')";
            //    RegisterDataBaseCode.DoQuery(query);

            //    Acount += Session["firstname"] ;

            //    Response.Redirect("Home_Page.aspx");

            //}
            //else
            //{
            //    Session["firstname"] = "שלום אורח";
            //    Response.Redirect("Home_page.aspx");
            //}



        }
    }
}