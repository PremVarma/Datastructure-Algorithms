package Problems.Java.Easy;

public class BalancedString {
    public static void main(String[] args) {
        BalancedString balancedString=new BalancedString();
    //    System.out.println( balancedString.balancedStringSplit("RLRLRL"));
       System.out.println( balancedString.minPartitions("27346209830709182346"));
    }

    public int balancedStringSplit(String s) {
        int total = 0, cnt = 0;
        for (int i = 0; i < s.length(); ++i) {
            cnt += s.charAt(i) == 'R' ? 1 : -1;
            if (cnt == 0) total++;
        }
        return total; 
        }

        public int minPartitions(String n) {
        // int res = 0;
        // for (int i = 0; i < n.length(); i++){
        //     res = Math.max(res, n.charAt(i)-'0');
        //     System.out.println(n.charAt(i)+",,"+res);
        // }
        // return res;
        int max = n.chars().max().getAsInt();
        System.out.println(Character.getNumericValue((char) max));
        return 0;
        //return Math.max(n.charAt(0)-'0',n.charAt(n.length()-1)== '0'?1:Character.getNumericValue(n.charAt(n.length()-1)));
        } 

        // public int minPartitions(String n) {
        //     return n.charAt(n.length()-1)== '0'?1:Character.getNumericValue(n.charAt(n.length()-1));
        // }   
}
