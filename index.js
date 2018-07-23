// Use AJAX to read the JSON asynchronously

// function readFile(file, callback) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.overrideMimeType("application/json");
//   rawFile.open("GET", file, true);
//   rawFile.onreadystatechange = function() {
//     if (rawFile.readyState === 4 && rawFile.status == "200") {
//       callback(rawFile.responseText);
//     }
//   };
//   rawFile.send(null);
// }

// function getUserData() {
//   readFile("users.json", function(text) {
//     var data = [JSON.parse(text)];
//     return data;
//   });
// }

// function getJobsData() {
//   readFile("jobs.json", function(text) {
//     var data = [JSON.parse(text)];
//     return data;
//   });
// }

// getUserData();
// getUserDataArray();

// For this example, I simply declared the json files into two arrays.

var usersData = [
  {
    id: 1,
    name: "Foo",
    tags: ["a", "b"]
  },
  {
    id: 2,
    name: "Bar",
    tags: ["c", "g"]
  },
  {
    id: 3,
    name: "Hello",
    tags: ["d", "e", "f"]
  },
  {
    id: 4,
    name: "World",
    tags: ["a", "c", "d"]
  }
];

var jobsData = [
  {
    id: 1,
    title: "Foo developer",
    company: "Bar industries",
    tags: ["a", "b", "c"]
  },
  {
    id: 2,
    title: "Full-stack developer",
    company: "Bar industries",
    tags: ["b", "c", "e"]
  },
  {
    id: 3,
    title: "Data scientist",
    company: "Bar industries",
    tags: ["d", "e", "g"]
  },
  {
    id: 4,
    title: "Front-end developer",
    company: "Bar industries",
    tags: ["a", "b", "f"]
  },
  {
    id: 5,
    title: "Devops Engineer",
    company: "Bar industries",
    tags: ["b", "e"]
  },
  {
    id: 6,
    title: "Chief Technical Officer",
    company: "Bar industries",
    tags: ["c", "e", "g"]
  },
  {
    id: 7,
    title: "Code Monkey",
    company: "Bar industries",
    tags: ["d", "g"]
  },
  {
    id: 8,
    title: "Intern",
    company: "Bar industries",
    tags: ["c", "d", "f"]
  }
];

compareUsersToJobs(usersData, jobsData);

function compareUsersToJobs(a, b) {
  for (var i = 0; i < a.length; i++) {
    for (var e = 0; e < b.length; e++) {
      compareTags(a[i], b[e]);
    }
  }
}

function compareTags(user, job) {
  if (compareArrays(user, job)) {
    console.log(
      `User ${user.id} has [${user.tags}] and matches [${job.id}, ${
        job.tags
      }, ${job.company}]`
    );
  }
}

function compareArrays(a, b) {
  var matches = [];
  for (var i = 0; i < a.tags.length; i++) {
    for (var e = 0; e < b.tags.length; e++) {
      if (a.tags[i] === b.tags[e]) matches.push(a[i]);
    }
  }
  if (matches.length >= 2) {
    return true;
  }
}
