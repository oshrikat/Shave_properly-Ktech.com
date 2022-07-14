<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RegisterPage.aspx.cs" Inherits="Giluah_Kehalaha___NEW_WEBSITE_2022.RegisterPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" dir="rtl">
<head runat="server">
    <title> הירשם לאתר שלנו</title>

    <link href="HomePage.css" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="https://irp-cdn.multiscreensite.com/e4ac1c0a/site_favicon_16_1566894260487.ico"/>

    <script src="RegisterJava.js"></script>
    
</head>
<body>
 


               <section class="register_form" > 

            <form action="AfterRegister.aspx" method="post" class="register" onsubmit="return validation()" id="MyForm">   
           
                <h1 id="Register_Title" style="font-family:'Guttman Logo1'; margin:auto; text-align:center; font-size:40px;"> הרשמה לאתר</h1>
       <p id="errorhome" style=" display:flex;  justify-content:center ; margin:2%  auto; font-size:17px; width:100%"> <%=error %></p>
                <div class="register_inputs">
                <label style="  font-family:Arial; font-size:20px; ">
                    שם פרטי 
                </label>
                  <br />
                <input type="text" onclick="clearAll()" name="firstname" autocomplete="off" placeholder="הכנס שם פרטי" id="firstname" /> 
           <br />
           <br />
                <label  style=" font-family:Arial; font-size:20px;">
                שם משפחה
            </label>
                  <br />
                <input type="text"  onclick="clearAll()" name="lastname" autocomplete="off"placeholder="הכנס שם משפחה" id="lastname" /> 
         <br />
         <br />
                <label  style=" font-family:Arial; font-size:20px; ">
                סיסמא
            </label>
                  <br />
                <input type="password"  onclick="clearAll()" name="pass" autocomplete="off"placeholder="הזן סיסמא" id="pass" /> 
             
           <br />
           <br />
             <label  style="font-family:Arial; font-size:20px">
                אימייל
            </label>
                  <br />
                <input type="text"  onclick="clearAll()" name="email" autocomplete="off" placeholder="הזן אימייל" id="email" /> 
             <br />
             <br />
           <p>
                      <input type="submit" name="submit" id="submit" value="שליחת טופס" />
              </p>       
           
                    </div>
   
           

                  
   
          
                
           
            </form>
   <div id="Log_In">
       <h3 id="Count_Exist">  יש לך משתמש   ? מעולה!! <br /> <a href="ConnectingUser.aspx"> 👈התחבר👉</a> </h3>
       </div>

   <div id="Contact">
       <h3 id="Make_Contact">  רוצים ליצור עימנו קשר  ? <br /> <a href="Contact Us.aspx"> 👈צור קשר👉</a> </h3>

   </div>
        </section>
</body>
</html>
