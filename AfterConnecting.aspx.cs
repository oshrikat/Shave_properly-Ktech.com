using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Giluah_Kehalaha___NEW_WEBSITE_2022
{
    public partial class AfterConnecting : System.Web.UI.Page
    {
        public string manager="";
        protected void Page_Load(object sender, EventArgs e)
        {
            string firstname = Request.Form["firstname"];
            string lastname = Request.Form["lastname"];
            string email = Request.Form["email"];
            string pass = Request.Form["pass"];





          string firstnamequery = "SELECT * FROM RegisterAndConnectData WHERE '" + firstname +"'=firstname";
          string query = "SELECT * FROM RegisterAndConnectData WHERE'" + email +"'=email";
          string query2 = "SELECT * FROM RegisterAndConnectData WHERE'" + pass +"'=pass";
            //string emailEqualsName = "SELECT firstname FROM RegisterAndConnectData WHERE '"+email + "'=email";






            if ( RegisterDataBaseCode.IsExist(firstnamequery) == true && RegisterDataBaseCode.IsExist(query) == true && RegisterDataBaseCode.IsExist(query2) == true && firstname == "oshri" )
            {
               
                Response.Redirect("Admin.aspx");
                Response.Redirect("User_HomePage.aspx");
                Session["firstname"] = firstname;

            }


          else  if ( RegisterDataBaseCode.IsExist(firstnamequery) == true && RegisterDataBaseCode.IsExist(query) == true && RegisterDataBaseCode.IsExist(query2) == true )
            {
                Session["firstname"] = firstname;
                Response.Redirect("User_HomePage.aspx");
             
            }

            else
            {
                Response.Redirect("RegisterPage.aspx");
            }

            //if (firstname == "oshri")
            //{
            //    Session["firstname"] = "שלום מנהל";
            //}

        }
    }
}