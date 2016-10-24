package com.app;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;
import javax.ws.rs.FormParam;


public class DB{
	Connection con = null;
	Statement stmt = null;

	
	public List<UserInfo> getData(String searchType, String searchKey) {
		List<UserInfo> list = new ArrayList<>();

		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "SYSTEM", "system");
			stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery("select * from users where TYPE='"+searchType+"' and TOPIC like '%"+searchKey+"%'");
			
			while (rs.next()) {
				UserInfo userInfo = new UserInfo();
				userInfo.setName(rs.getString(1));
				userInfo.setEmail(rs.getString(2));
				userInfo.setType(rs.getString(3));
				userInfo.setTopic(rs.getString(4));
				list.add(userInfo);
			}
			con.close();
			stmt.close();
		} catch (Exception e) {
 
			e.printStackTrace();
		}
		return list;
	}
	public void insertData(String name,
			   String email,
			   String type,
			    String topic) {


		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "SYSTEM", "system");
			stmt = con.createStatement();
			String sql = "INSERT INTO users " +
	                   "VALUES('"+name+"', '"+email+"', '"+type+"', '"+topic+"')";
      System.out.println(sql);
      
			stmt.executeUpdate(sql);
      
			
			con.close();
			stmt.close();
		} catch (Exception e) {
			
			e.printStackTrace();
		}

	}
	
	
}
