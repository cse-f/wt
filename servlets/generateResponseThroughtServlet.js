2 steps
step1-create servlet file
//run index.html file

package second;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;


public class SecondMain extends HttpServlet {

   @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("name");
        resp.getWriter().write("Hello, " + name);
        System.out.println("Received name: " + name);
    }

}


step-2
create html file in webapp folder
<!DOCTYPE html>
<html>
<head>
    <title>Test POST</title>
</head>
<body>
    <form action="SecondMain" method="post">
        <label for="name">Enter your name:</label>
        <input type="text" id="name" name="name" required>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
