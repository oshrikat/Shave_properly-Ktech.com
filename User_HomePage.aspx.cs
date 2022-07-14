using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Giluah_Kehalaha___NEW_WEBSITE_2022
{
    public partial class User_HomePage : System.Web.UI.Page
    {
        public string Acount = "";
        public string JustCosher = "";
        public string rigorousChoser = "";
        public string dontmind = "";
        protected void Page_Load(object sender, EventArgs e)
        {

            if (Session["firstname"] == null)
            {
                Acount = "  שלום אורח !";
            }


            else
            {
                Acount += Session["firstname"] + " / <a  href=LogOut.aspx style=color:smokewhite>   &nbsp;  התנתקות      </a>  ";
            }



            if (Request.Form["submit"] != null)
            {
             
                string option = Request.Form["options"];
                int x = int.Parse(Application[option].ToString()) + 1;
                Application[option] = x ;

                if (option == "justCosher")
                {
                    JustCosher += Application["justCosher"];
                    rigorousChoser += Application["rigorousChoser"];
                    dontmind += Application["dontmind"];
                }

                if (option == "rigorousChoser")
                {
                    rigorousChoser += Application["rigorousChoser"];
                    JustCosher += Application["justCosher"];
                    dontmind += Application["dontmind"];
                }

                if (option == "dontmind")
                {
                    dontmind += Application["dontmind"];
                    JustCosher += Application["justCosher"];
                    rigorousChoser += Application["rigorousChoser"];
                }
                


                //tbl += "<h5> " + Application["justCosher"] + "</h5>";
                //tbl += "<h5> " + Application["rigorousChoser"] + "</h5>";
                //tbl += "<h5> " + Application["dontmind"] + "</h5>";


                //tbl = "<table border=0>";
                //tbl += "<tr> <th> תוצאות </th> <th> כמות שבחרו </th> </tr>";
                //tbl += "<tr> <td> הכשר צומת </td> <td>" + Application["justCosher"] + "</td> </tr>";
                //tbl += "<tr> <td> הכשר מחמיר </td> <td>" + Application["rigorousChoser"] + "</td> </tr>";
                //tbl += "<tr> <td> לא משנה </td> <td>" + Application["dontmind"] + "</td> </tr>";
                //tbl += " </table>";
               
            }



        }
    }
}