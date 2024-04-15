import java.util.Scanner;

public class hello {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int a;
        System.out.println("Enter your number");
        a = in.nextInt();
        switch (a) {
            case 10:
                System.out.println("10");
                break;
            case 20:
                System.out.println("20");
                break;
        
            default:
                System.out.println("not valid");
                break;
        }
    }
}