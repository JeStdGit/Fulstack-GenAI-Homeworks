// 1.1: Deep Object Destructuring
const userProfile = {
    id: 402,
    username: "code_ninja",
    location: {
        country: "USA",
        city: "Seattle"
    },
    preferences: {
        hobbies: ["cycling", "reading", "gaming"]
    }
};

const {
    username: handle,
    location: { city },
    preferences: { hobbies: [firstHobbie] }
} = userProfile

console.log("user name:", handle);
console.log("city:", city);
console.log("first hobbie:", firstHobbie);


// 1.2: Array Destructuring & Swapping
const topScores = [88, 92, 100]
const [firstPlace, ...runnerUps] = topScores.sort((a, b) => b - a)

console.log(firstPlace, runnerUps);
