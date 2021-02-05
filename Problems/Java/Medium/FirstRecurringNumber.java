package Problems.Java.Medium;

import java.util.HashMap;
import java.util.Map;

public class FirstRecurringNumber{
    public static void main(String[] args) {
        int num[]=new int[]{2,1,3,0,9,3,5,1,2,4};
        FirstRecurringNumber firstRecurringNumber=new FirstRecurringNumber(); 
        System.out.println(firstRecurringNumber.firstRecurringCharacter(num));
        System.out.println(firstRecurringNumber.firstRecurringCharacter2(num));
    }

    public int firstRecurringCharacter(int[] numbers){
        int firstRecurring=1;
        int count=0;
        for(int i=0;i<numbers.length;i++){
            for(int j=i+1;j<numbers.length;j++){
                if(numbers[i]==numbers[j]){
                    count+=1;
                    if(count==1){
                        firstRecurring=j;
                    }
                    if(j<firstRecurring){
                        firstRecurring=j;
                    }
                }
            }
        }
        return numbers[firstRecurring];
    }

    public int firstRecurringCharacter2(int[] numbers){
        Map map=new HashMap<>();
        for(int i=0;i<numbers.length;i++){
            if(map.containsKey(numbers[i])){
                return numbers[i];
            }else{
                map.put(numbers[i],numbers[i]);
            }
        }
        return 0;
    }
}