/**
 * Given a string, we have to find out all its unique subsequences of it. A String 
 * is a subsequence of a given String, that is generated by deleting some 
 * character of a given string without changing its order.
 */

/**
 * Input  : aab
 * Output : b, a, ab, aa, aab
 */

/**
 * Recursive Tree         Node -> (input, output)
 * 
 *                                  ("aab", "")
 *                                 /           \
 *                                /             \
 *                               /               \
 *                      ("ab", "")                ("ab", "a")
 *                      /        \                 /         \
 *                     /          \               /           \ 
 *                    /            \             /             \
 *              ("b", "")      ("b", "a")      ("b", "a")       ("b", "aa") 
 *              /  \          /    \                 /   \               / \
 *             /    \        /      \               /     \             /   \ 
 *            /      \      /        \             /       \           /     \
 *    ("", "") ("", "b")  ("", "a") ("", "ab")  ("", "a") ("", "ab")  ("", "aa") ("", "aab")
 * 
 */

function solution(input, output, map) {

    // if the input is empty print the output string
    if (input.length === 0) {
        if (!map[output]) {
            console.log(`"${output}"`);
            map[output] = 1;
        }
        return;
    }

    // output is passed without including the Ist character of Input string
    solution(input.substr(1), output, map);

    // output is passed with including the Ist character of Input string
    solution(input.substr(1), output + input[0], map);

}

let inputs = ["aab", "aba"];

inputs.forEach(input => {
    let output = "";
    const map = {};
    console.log(`\n\nInput: ${input}`);
    solution(input, output, map);
    console.log("Output: " + Object.keys(map).toString());
});

// Input: aab
// ""
// "b"
// "a"
// "ab"
// "aa"
// "aab"
// Output: "" ,b,a,ab,aa,aab


// Input: aba
// ""
// "a"
// "b"
// "ba"
// "aa"
// "ab"
// "aba"
// Output: "" ,a,b,ba,aa,ab,aba

/**
 * Time Complexity: O(2^n) for generating every subset and O(k)  to insert every subset in another data structure if the average length of every subset is k. Overall O(k * 2^n).
 * 
 * Space Complexity: O(2^n * k) to store every subset of average length k. Auxiliary space is O(n)  if n is the depth of the recursion tree.
 * 
 */
