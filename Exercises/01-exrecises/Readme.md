# Programming Exercises

Translations: [הפניה לתרגום בעברית](Readme-he.md)

## Part 1: Basics (no conditions)

1. Read 3 numbers. Display their sum and average.

2. Read the width and height of a rectangular room. Display its area and perimeter.

3. Read the diameter and depth of a pot. Display its capacity.
   (Circle area = πR², π ≈ 3.14, R = diameter / 2)

4. Read a movie's length in minutes. Display it in hours and minutes.
   Example: input `88` → output `1 hour(s) and 28 minute(s)`

5. Read a number (guaranteed at least 4 digits). Find and display the rightmost digit.
   Example: input `6235` → output `5`

6. Read a number (guaranteed at least 4 digits). Find and display the second digit from the right.
   Example: input `6235` → output `3`

7. Read a 3-digit number. Display the hundreds digit (guaranteed not 0).
   Example: input `6235` → output `2`

8. Read a 2-digit number. Display the sum of its digits.

9. Read an integer between 10 and 99. Reverse its digits and display the new number.
   Example: input `61` → output `16`

10. Read a number. Display the nearest even integer that is greater than it.
    Example: input `4.1` → output `6`

---

## Part 2: Simple Conditions

1. Read two values. Display "Growing" if the second is strictly greater than the first.

2. Read two values. Display the greater one (if equal, display either).

3. Read an integer. Display "Even" if it is even, "Odd" if not.

4. Read two integers. Display whether the first is divisible by the second (with no remainder), and also whether the second is divisible by the first.

5. Read two values. Display the smaller one first, then the larger (if equal, display both).

6. A software company decided to raise every programmer's salary by 10%, provided the new salary does not exceed 6,000 NIS. If it would exceed 6,000 NIS, the raise is 5% only.
   Read a programmer's name and current salary. Display the salary after the raise.

---

## Part 3: Nested Conditions

1. Read a value. Display `"Negative"`, `"Zero"`, or `"Positive"` accordingly.

2. Read three values. Display `"Increasing"` only if the second is greater than the first and the third is greater than the second.

3. Read three values. Display the largest (if equal, display any one of them).

4. Read an integer between 1 and 9,999. Display how many digits it has.

5. The tax authority defined the following tax brackets:
   - First 23,000 NIS — 10% tax rate
   - Next 23,000 NIS — 20% tax rate
   - Next 74,000 NIS — 30% tax rate
   - Next 100,000 NIS — 40% tax rate
   - Any amount above — 50% tax rate

   Read a freelancer's name and annual income. Display the total tax amount they owe.

---

## Part 4: Loops

1. Read two integers. Display all integers between them (inclusive), from first to second.

2. Read a number N. Compute and display:
   `N! = 1 × 2 × 3 × ... × N`

3. Read a number N. Compute and display the sum of all integers from 1 to N that are divisible by 3.
   Example: if N = 7, the result is 9 (because 3 + 6 = 9).

---

## Part 5: Nested Loops

1. A school has 100 students, each with 10 grades. The data is ordered by student — 10 grades for student 1, then 10 for student 2, etc.
   Display the average grade for each student, and the overall school average.

3. Read 10 integers. Display all integers between each consecutive pair.
   Example: input `9, 12, 8, 8, ...` → output `9, 10, 11, 12, 11, 10, 9, 8, 8, ...`

---

## Part 6: Arrays

1. Check whether an array of size 10 is a palindrome or not.

---

## Part 7: Matrices

1. Fill a 10×10 matrix with consecutive numbers (0–99).

2. Build a 10×10 matrix filled with zeros, except for both diagonals which should be 1.

3. Read values into a 10×10 matrix. Display the index of the row with the highest sum.

4. Read values into a 10×10 matrix. Zero out every cell that is divisible by 5 or by 7.

5. Fill a 10×10 matrix so that the outermost frame is filled with 1, the next inner frame with 2, and so on.