2 steps
step1-create servlet file

package second;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;


public class SecondMain extends HttpServlet {

    @Override
    public void init() throws ServletException {
        super.init();
        System.out.println("Servlet is being initialized.");
    }

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("Servlet is processing a request.");
        super.service(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().write("Hello, World! This is a GET request.");
        System.out.println("Processing GET request.");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().write("Hello, World! This is a POST request.");
        System.out.println("Processing POST request.");
    }

    @Override
    public void destroy() {
        System.out.println("Servlet is being destroyed.");
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
        <input type="submit" value="Submit POST Request">
    </form>
</body>
</html>
