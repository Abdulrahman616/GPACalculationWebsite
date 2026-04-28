function gradeToPoints(grade, scale) {
    if (scale === 5) {
        if (grade >= 95) return 5.0;
        else if (grade >= 90) return 4.75;
        else if (grade >= 85) return 4.5;
        else if (grade >= 80) return 4.0;
        else if (grade >= 75) return 3.5;
        else if (grade >= 70) return 3.0;
        else if (grade >= 65) return 2.5;
        else if (grade >= 60) return 2.0;
        else return 0.0;
    } else {
        // if the GPA was up to 4
        if (grade >= 90) return 4.0;
        else if (grade >= 85) return 3.7;
        else if (grade >= 80) return 3.3;
        else if (grade >= 75) return 3.0;
        else if (grade >= 70) return 2.7;
        else if (grade >= 65) return 2.3;
        else if (grade >= 60) return 2.0;
        else return 0.0;
    }
}


function calculateGPA() {
    var scaleSelect = document.getElementById("gpaScale");
    var scale = parseInt(scaleSelect.value);       // conventing the selected scale to a intger 
    var table = document.getElementById("calculator-table");
    var totalHours = 0;
    var totalPoints = 0;

    for (var i = 1; i < table.rows.length; i++) {
        var hours = parseFloat(table.rows[i].cells[1].querySelector("input").value);
        var grade = parseFloat(table.rows[i].cells[2].querySelector("input").value);
        totalHours = totalHours + hours;
        totalPoints = totalPoints + (hours * gradeToPoints(grade, scale));   //using the selected scale to calculate the GPA
    }


    var gpa = totalPoints / totalHours;


    document.getElementById("total-hours").textContent = totalHours;
    document.getElementById("gpa-value").textContent = gpa.toFixed(2); // https://www.w3schools.com/jsref/prop_node_textcontent.asp was the guidance here
    document.getElementById("gpa-result").style.display = "block";
}

function toggleDarkMode() {
    if (document.body.style.backgroundColor === "black") {

        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        document.querySelector("article").style.backgroundColor = ""; // https://stackoverflow.com/questions/54954942/how-to-revert-changes-to-css-made-by-javascript for more explanation 
        document.querySelector("article").style.color = "";
        document.getElementById("gpa-result").style.backgroundColor = "";

    } else {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelector("article").style.backgroundColor = "#1a1a1a";
        document.querySelector("article").style.color = "#f0f0f0";
        document.getElementById("gpa-result").style.backgroundColor = "#1a1a1a";
    }
}

function confirmReset() {
    if (confirm("Are you sure? This will delete all your courses.")) // this will reture true or fulse
    {
        resetTable();
    }
}