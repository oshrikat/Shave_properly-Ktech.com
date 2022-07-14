using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Giluah_Kehalaha___NEW_WEBSITE_2022
{
    public partial class MySurvey : System.Web.UI.Page
    {
        public string tbl = "<table border=1>";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.QueryString["submit"] != null)
            {
                string color = Request.QueryString["colors"];
                int x = int.Parse(Application[color].ToString()) + 1;
                Application[color] = x + "";
            }
            tbl += "<tr> <td> answer # </td> <td> count </td> </tr>";
            tbl += "<tr> <td> green </td> <td>" + Application["green"] + "</td> </tr>";
            tbl += "<tr> <td> yellow </td> <td>" + Application["yellow"] + "</td> </tr>";
            tbl += "<tr> <td> pink </td>  <td>" + Application["pink"] + "</td> </tr>";
            tbl += "<tr> <td> white </td> <td>" + Application["white"] + "</td> </tr>";
            tbl += " </table>";
        }
    }
}