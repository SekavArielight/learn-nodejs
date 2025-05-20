const firstName = "Ada";
const lastName = "Lovelace";
const year = 1815;
const occupation = "mathematician";
const achievement = "first computer programmer";

const intro = "Name: " + firstName + " " + lastName + "\n" +
              "Born: " + (year - 200) + " + 200 = " + year + "\n" +
              "Occupation: " + occupation.toUpperCase() + "\n" +
              "Known as the " + achievement.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ") + ".";

console.log(intro);