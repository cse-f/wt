//usage of scripting elements in jsp pages

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Current Date and Time</title>
</head>
<body>

<form action="dateAndTime.jsp" method="POST">
 <input type="text" id="name" name="name">
 <button type="submit">enter</button>
</form>
	 <%! String name=new String();
	       int age=30;
	       String tag="expression";
	       %> 
	 <%
        name = request.getParameter("name");
	    System.out.println("this is scriptlet");
    %>
    <p> the age is <%=age %></p>
    <p>the name is <%=name %></p>
    <p>this tag is <%=tag %></p>
</body>
</html>
