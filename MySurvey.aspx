<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MySurvey.aspx.cs" Inherits="Giluah_Kehalaha___NEW_WEBSITE_2022.MySurvey" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
     <form action="" method="get">
        <p>Select Your Favorite Color</p>
        <p><input type="radio" name="colors" value="green" checked="checked" />green</p>
        <p><input type="radio" name="colors" value="yellow" />yellow</p>
        <p><input type="radio" name="colors" value="pink" />pink</p>
        <p><input type="radio" name="colors" value="white" />white</p>
        <input type="submit" value="vote" name="submit" />
    </form>
    <br />
    <h2>Survey Results:</h2>
  <%=tbl %> 
</body>
</html>
