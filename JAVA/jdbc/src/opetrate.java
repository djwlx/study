import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import  com.mysql.cj.jdbc.Driver;
import java.sql.ResultSet;
public class opetrate {
	public static Connection getcon() throws SQLException {
		DriverManager.registerDriver(new Driver());
		// 3 连接到数据库
		String url = "jdbc:mysql://localhost:3306/student";
		String user = "root";
		String password = "123";
		Connection con = DriverManager.getConnection(url, user, password);
		return con;
	}

	public static void add(int a,String b,String c,int d)throws SQLException{
		Connection con=getcon();
		String sql="insert into score values("+a+",'"+b+"','"+c+"',"+d+")";
		Statement stmt=con.createStatement();
		int ret=stmt.executeUpdate(sql);
		System.out.println(ret+"行受影响");
		con.close();
	}
	
	public static void delete(int a)throws SQLException{
		Connection con=getcon();
		String sql="delete from score where sno="+a+"";
		Statement stmt=con.createStatement();
		int ret=stmt.executeUpdate(sql);
		System.out.println(ret+"行受影响");
		con.close();
	}
	public static void change(int e,int a,String b,String c,int d)throws SQLException{
		Connection con=getcon();
		String sql="update score set sno="+a+",name='"+b+"',sex='"+c+"',score="+d+" where sno="+e+ "";
		Statement stmt=con.createStatement();
		int ret=stmt.executeUpdate(sql);
		System.out.println(ret+"行受影响");
		con.close();
	}
	public static void check(int a)throws SQLException{
		Connection con=getcon();
		String sql="select * from score where sno="+a+"";
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery(sql);
		//5 看结果
		while (rs.next()) {//让它定位到行
			//rs.getInt("id"):定位列
			System.out.println("学号\t姓名\t性别\t分数");
			System.out.println(rs.getInt("sno")+"\t"+rs.getString("name")+"\t"+rs.getString("sex")+"\t"+rs.getInt("score"));
		}
		System.out.println("查询完毕！");
		con.close();
	}
}
