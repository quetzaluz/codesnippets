import java.util.*;
import java.io.*;

class Node {
    Node left;
    Node right;
    int data;
    
    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

class Solution {
	/* 
    
    class Node 
    	int data;
    	Node left;
    	Node right;
	*/
	public static void levelOrder(Node root) {
        List<List<Integer>> result = new ArrayList();
        int depth = 0;
        result = findLevels(root, result, depth);
        for (int i = 0; i < result.size(); i++) {
            List<Integer> l = result.get(i);
            for (int j = 0; j < l.size(); j++) {
                int v = l.get(j);
                System.out.print(v);
                if (j < l.size() - 1) {
                    System.out.printf(" ");
                }
            }
            if (i < result.size() - 1) {
                System.out.print(" ");
            }
        }
    }

    public static List<List<Integer>> findLevels(Node root, List<List<Integer>> result, int depth) {
        if (root == null) {
            return result;
        }
        if (result.size() <= depth) {
            List<Integer> newRow = new ArrayList();
            result.add(newRow);
        }
        result.get(depth).add(root.data);
        if (root.left != null) {
            result = findLevels(root.left, result, depth + 1);
        }
        if (root.right != null) {
            result = findLevels(root.right, result, depth + 1);
        }
        return result;
    }
	public static Node insert(Node root, int data) {
        if(root == null) {
            return new Node(data);
        } else {
            Node cur;
            if(data <= root.data) {
                cur = insert(root.left, data);
                root.left = cur;
            } else {
                cur = insert(root.right, data);
                root.right = cur;
            }
            return root;
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int t = scan.nextInt();
        Node root = null;
        while(t-- > 0) {
            int data = scan.nextInt();
            root = insert(root, data);
        }
        scan.close();
        levelOrder(root);
    }	
}
