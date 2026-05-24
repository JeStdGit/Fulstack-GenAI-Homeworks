# **Homework 8: The Data Routing & Control Engine**

## **1\. The Scenario & Mock Data**

You are tasked with writing a function named processQueue(queue, logs). Assume the following mock data is passed into your function:

const requestsQueue \= \[  
  { id: 1, type: "AI\_PROMPT", status: "pending", priority: 1, payload: { model: "claude", tokens: 150, stream: true }, user: { role: "student", active: true } },  
  { id: 2, type: "DB\_QUERY", status: "pending", priority: 3, payload: { query: "SELECT \*", limit: 10 }, user: { role: "admin", active: true } },  
  { id: 3, type: "SEND\_EMAIL", status: "corrupted", priority: 2, payload: null, user: { role: "guest", active: false } },  
  { id: 4, type: "AI\_PROMPT", status: "pending", priority: 5, payload: { model: "gpt-4", tokens: null, temp: undefined }, user: { role: "admin", active: true } },  
  { id: 5, type: "CRITICAL\_HALT", status: "fatal", priority: 0, payload: { error: "Memory Overflow" }, user: { role: "system", active: true } }  
\];

const actionLogs \= \["init", "auth\_check", "load\_modules", "connect\_db", "ready"\];

## **2\. System Requirements**

Your processQueue function must implement the following steps, utilizing every tool listed below. Do not use array methods like .map() or .filter() for this specific assignment—I want to see your mastery of native loops.

1. **Queue Management (while loop & break)**: Use a while loop to process the queue as long as it has items. Extract the first item in each iteration. If you encounter a request with the type "CRITICAL\_HALT", you must immediately stop all processing using a break statement and print a fatal error message.  
2. **Initial Filtering (for...of & continue)**: Use a for...of loop to iterate through the requests. If a request's status is "corrupted" or its payload is missing/null, skip it immediately and move to the next request using continue.  
3. **Complex Business Logic (Logical Ops & Operator Precedence)**: Create a boolean variable isApproved for the current request. A request is ONLY approved if it meets all the following criteria (you MUST use parentheses to enforce correct evaluation order):  
   * The user is an "admin" **OR** the request priority is strictly greater than 2\.  
   * **AND** The user is currently active (active: true).  
   * **AND** It is **NOT** a case where the payload model is "claude" with tokens strictly less than 200\.  
4. **Payload Normalization (for...in)**: For requests that are approved, inspect their payload object. Use a for...in loop to iterate over the keys. If any value is null or undefined, overwrite it with the string "MISSING\_DATA".  
5. **Request Routing (switch case)**: Use a switch statement based on the approved request's type to simulate routing:  
   * "AI\_PROMPT": Console log *"Routing to LLM Engine..."*  
   * "DB\_QUERY": Console log *"Executing Secure Query..."*  
   * "SEND\_EMAIL": Console log *"Adding to Mail Delivery Queue..."*  
   * default: Console log *"Unknown request type, moving to dead-letter queue."*  
6. **System Health Check (Standard for loop)**: Finally, outside of your main processing loop, perform a sanity check on the actionLogs array. Use a standard for loop (with an i counter) to iterate **backwards** through the array. Print only the last 3 logged actions to verify system startup sequences.

## **3\. Grading Rubric**

| Requirement | Weight | Details   |
| :---- | :---- | :---- |
| Logical Operations & Precedence | 30% | Proper grouping using parentheses (&& vs || evaluation). |
| Loop Selection & Accuracy | 30% | Correct application of for, for...in, for...of, and while loops. |
| Control Flow Mechanics | 20% | Accurate usage of break, continue, and switch-case routing. |
| Code Cleanliness | 20% | Proper indentation, meaningful variable names, and clear comments. |

**Good luck, think carefully about your logic gates, and remember to test your edge cases\!**