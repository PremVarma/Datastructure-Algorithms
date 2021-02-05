package Problems.Java.Easy;

import java.util.*;

public class TargetArrayOrder {
    public static void main(String[] args) {
        System.out.println("Create Target Array in the Given Order");
        TargetArrayOrder foo = new TargetArrayOrder();
        int[] nums={1,2,3,4,0}, index = {0,1,2,3,0};
        System.out.println(Arrays.toString(foo.createTargetArray(nums, index)));
    }

    public int[] createTargetArray(int[] nums, int[] index) {
        ArrayList<Integer> a = new ArrayList<Integer>();
        for(int i=0;i<nums.length;i++)
        {
            a.add(index[i],nums[i]);
        }
        int target[] = new int[nums.length];
        for(int i=0;i<nums.length;i++)
        {
            target[i] = a.get(i);
        }
        return target;
    }
}
