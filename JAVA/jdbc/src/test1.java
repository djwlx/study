import java.sql.SQLException;
import java.util.Scanner;

public class test1 {
	

	public static void tian()throws SQLException{
		Scanner sc = new Scanner(System.in);
		int xuehao;
		String xingming;
		String xingbie;
		int grade;
		System.out.println("请输入你想添加的学生信息:");
		System.out.println("学生学号:");
		xuehao=sc.nextInt();
		System.out.println("学生姓名:");
		sc.nextLine();
		xingming=sc.nextLine();
		System.out.println("学生性别:");
		xingbie=sc.nextLine();
		System.out.println("学生成绩:");
		grade=sc.nextInt();
		opetrate.add(xuehao,xingming,xingbie,grade);
		caidan();
	}
	public static void xiugai()throws SQLException{
		Scanner sc = new Scanner(System.in);
		int xuehao;
		String xingming;
		String xingbie;
		int grade;
		System.out.println("请输入你想修改的学生学号:");
		int xuehao1=sc.nextInt();
		System.out.println("请重新输入该学生信息:");
		System.out.println("学生学号:");
		xuehao=sc.nextInt();
		System.out.println("学生姓名:");
		sc.nextLine();
		xingming=sc.nextLine();
		System.out.println("学生性别:");
		xingbie=sc.nextLine();
		System.out.println("学生成绩:");
		grade=sc.nextInt();
		opetrate.change(xuehao1,xuehao,xingming,xingbie,grade);
		caidan();
	}
	public static void shanchu()throws SQLException{
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入你想删除的学生学号:");
		int sno=sc.nextInt();
		opetrate.delete(sno);
		caidan();
	}
	public static void chaxun()throws SQLException{
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入你想查询的学生学号:");
		int sno=sc.nextInt();
		opetrate.check(sno);
		caidan();
	}
                public static void login(){}
	public static void caidan()throws SQLException{
		System.out.println("学生成绩管理系统");
		System.out.println("1.添加学生信息");
		System.out.println("2.修改学生信息");
		System.out.println("3.删除学生信息");
		System.out.println("4.查询学生信息");
		System.out.println("5.退出\n");
		int a;
		Scanner sc = new Scanner(System.in);
		a=sc.nextInt();
		switch(a)
		{
		case 1:tian();break;
		case 2:xiugai();break;
		case 3:shanchu();break;
		case 4:chaxun();break;
		case 5:System.out.println("感谢使用");break;
		}
	}
	public static void main(String[] args)throws SQLException{
		// TODO Auto-generated method stub
		caidan();
	}

}
