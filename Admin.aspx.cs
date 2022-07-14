using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Giluah_Kehalaha___NEW_WEBSITE_2022
{
    public partial class Admin : System.Web.UI.Page
    {
        public string tbl = "";
        public string Acount = "";
        public string manager = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            string query = "SELECT * FROM RegisterAndConnectData";
            tbl = RegisterDataBaseCode.PrintDataTable(query);

            Acount = "ברוך הבא המנהל אושרי !";
        }
    }
}