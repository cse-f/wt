//scrollable result set


package jdbc;
import java.sql.*;

public class Updatable {
    public static void main(String args[]) {
        try {

            Class.forName("oracle.jdbc.driver.OracleDriver");
            Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE", "system", "cvr1234");
            Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);
            
       
            ResultSet rs = stmt.executeQuery("SELECT * FROM department");
            
           while(rs.next()) {
        	   System.out.println(rs.getString(2));
           }
            System.out.println("________________");
            while(rs.previous()) {
         	   System.out.println(rs.getString(2));
            }
            
            if(rs.absolute(3)) {
            	 System.out.println(rs.getString(2));
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
