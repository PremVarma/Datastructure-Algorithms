package Problems.Java.Easy;

public class NumberGoodPairs {
    public static void main(String[] args) {
        System.out.println("Number of Good Pairs");
        NumberGoodPairs goodPairs=new NumberGoodPairs();
        System.out.println(goodPairs.subtractProductAndSum(436));
    }

    public int subtractProductAndSum(int n) {
        int product=1,sum=0;
        while(n>0){
            product*=n%10;
            sum+=n%10;
            n=n/10;
        }
        return product-sum;
    }
}
