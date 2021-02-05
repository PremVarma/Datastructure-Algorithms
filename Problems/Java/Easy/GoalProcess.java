package Problems.Java.Easy;

public class GoalProcess {
    public static void main(String[] args) {
        GoalProcess goalProcess=new GoalProcess();
        System.out.println(goalProcess.interpret("G()()(al)")); 
    }

    public String interpret(String command) {
        // StringBuilder sb = new StringBuilder();
        // for (int i = 0; i < command.length(); i++) {
        //     if (command.charAt(i) == 'G') {
        //         sb.append('G');
        //     } else if (i + 1 < command.length() && command.charAt(i + 1) == ')') {
        //         sb.append('o');
        //         i++;
        //     } else {
        //         sb.append("al");
        //         i = i + 3;
        //     }
        // }
        // return sb.toString();
        return command.replaceAll("\\(\\)", "o").replaceAll("\\(al\\)", "al");
    }
}
