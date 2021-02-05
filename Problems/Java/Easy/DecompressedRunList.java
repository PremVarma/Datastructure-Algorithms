package Problems.Java.Easy;

import java.util.*;


public class DecompressedRunList {
    public static void main(String[] args) {
        System.out.println("Decompress Run-Length Encoded List");
        int[] nums = {1,1,2,3};
        DecompressedRunList decompressedRunList=new DecompressedRunList();
        System.out.println(Arrays.toString(decompressedRunList.decompressRLElist(nums)));
    }
        public int[] decompressRLElist(int[] nums) {
            int size=0;
            for(int i=0;i<nums.length;i+=2){
                size+=nums[i];
            }
            
            int index=0;
            int[] arr=new int[size];
            
            for (int i = 0; i < nums.length; i++) {
                if(i%2==0){
                    for(int j=0;j<nums[i];j++){
                        arr[index]=nums[i+1];
                        index=index+1;
                    }
                }
            }
            return arr;
        }
    
}
