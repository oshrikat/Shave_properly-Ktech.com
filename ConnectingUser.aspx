<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ConnectingUser.aspx.cs" Inherits="Giluah_Kehalaha___NEW_WEBSITE_2022.ConnectingUser" %>

<!DOCTYPE html >

<html xmlns="http://www.w3.org/1999/xhtml" dir="rtl">
<head runat="server">
    <title>התחברות לאתר </title>
    <link href="connectingusercss.css" rel="stylesheet" />
    <script src="connecting.js"></script>
        <link rel="icon" type="image/x-icon" href="https://irp-cdn.multiscreensite.com/e4ac1c0a/site_favicon_16_1566894260487.ico"/>

</head>
<body>
  
    <h1 style="text-align:center; margin-top:2%; font-size:50px; font-family:Calibri"> התחברות לאתר </h1>

      <h1  style=" font-size:150%;display:flex; justify-content:center ;position:center; margin:0% auto"> 👇יש לך כבר משתמש? התחבר למשתמש כאן 👇 </h1>
              
   

    <h3 id="error" style="display:flex; justify-content:center ;position:center; margin:12% auto"></h3>
      
    <form action="AfterConnecting.aspx" method="post" id="Form_Connect"  onsubmit="return ConnectionValidation()"> 
                <div id="connect">
                   <div id="colum_1">
       
            <br />

   <input type="text" onclick="clearAll()" name="firstname" id="firstname" placeholder="הכנס שם" /> <br /> <br />


    <input type="text" onclick="clearAll()" name="email" id="email" placeholder="הכנס אימייל" /> <br /> <br />
        
                       
            
          
     <input type="text"  onclick="clearAll()"name="pass" id="pass" placeholder="הכנס סיסמא" /> <br /> <br />
          
                       
            <input type="submit" name="submit" value="התחבר"  id="button_connect"    />
                       </div>
     
     
     
                  <p id="p">
   
</p>
    </div>


     
     
         </form>

    <h3 style="display:flex; justify-content:center ;position:relative; margin:-17% auto ; ">        אין לך משתמש?       <a href="RegisterPage.aspx" style=" text-decoration:none; padding-right:10px">   הרשמה   </a></h3>
</body>
</html>
