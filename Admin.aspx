<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Admin.aspx.cs" Inherits="Giluah_Kehalaha___NEW_WEBSITE_2022.Admin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" dir="rtl">
<head runat="server">
    <title>  דף אדמין</title>
    <link href="Admin.css" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="https://irp-cdn.multiscreensite.com/e4ac1c0a/site_favicon_16_1566894260487.ico"/>

   <style>

       body{
           font-family:Calibri;
           font-weight:normal; 
           background-color:#EEEEEE;    
       }
       table{
           margin:10% auto;
                      font-family:'Times New Roman';
                      width:80%;
                     border-spacing:0;
                      margin-top:-50%;
                      border:0.5px dashed white;
      
                      }

       td{
           padding:0.5%;
           text-align:center;
       }

       #menu{
       }


   </style>

</head>
<body>

 


     <section class="part1">
    <section class="header">
        <nav>
            <div class="div1">
                

                <ul id="menu">

                    <a href="Home_Page.aspx" class="nevigation" style="border-bottom:1px double white">
                    <li>    דף הבית   </li>
                    </a>

                    <a href="Odot.aspx" class="nevigation">
                    <li>    אודות  </li>
                    </a>

                    <a href="Pictures.aspx" class="nevigation">
                    <li>    תמונות   </li>
                    </a>

                    <a href="Articals.aspx" class="nevigation">
                    <li>  מאמרים     </li>
                    </a>

                    <a href="Contact Us.aspx" class="nevigation">
                    <li>     צור קשר </li>
                    </a>

                    <li>
                    <a href="Home_Page.aspx" id="nevigation">
                        <img src="data:image/png;base64,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" width="300" height="43" id="shaver" title="גילוח כהלכה" />
                    </a>
                    </li>

                      <a href="RegisterPage.aspx" class="nevigation">
                    <li>    הרשמה </li>
                    </a>
                    
                   
                  <li class="Acount" style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; margin-top:0.5% ;"> 
                   &nbsp; <%=Acount %>
   </li>
                       
                </ul>

            </div>


        </nav>        





       
    </section>
         </section>

    <section>  

          <%=tbl %>



    </section>



</body>
</html>

