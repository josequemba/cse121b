const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { 
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        },
    ],

    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex ( 
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) { 
            this.sections[sectionIndex].enrolled++;
            outputSection(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0){
            this.sections[sectionIndex].enrolled--;
            outputSection(this.sections);
        }
    },

    //or
    //changeEnrollment: function (sectionNum, add = true) {
    //    // find the right section...Array.findIndex will work here
    //    const sectionIndex = this.sections.findIndex(
    //      (section) => section.sectionNum == sectionNum
    //    );
    //    if (sectionIndex >= 0) {
    //      if (add) {
    //        this.sections[sectionIndex].enrolled++;
    //      } else {
    //        this.sections[sectionIndex].enrolled--;
    //      }
    //      renderSections(this.sections);
    //    }
    //}
}

function setCourseInfo (course) {
    const nameCourse = document.querySelector("#courseName");
    const codeCourse = document.querySelector("#courseCode");
    nameCourse.textContent = course.name;
    codeCourse.textContent = course.code;
};

function outputSection (section) {
    const sections = section.map ((section) =>
        `<tr>
          <th>${section.sectionNum}</th>
          <th>${section.roomNum}</th>
          <th>${section.enrolled}</th>
          <th>${section.days}</th>
          <th>${section.instructor}</th>
        </tr>`
    );
    document.querySelector("#sections").innerHTML = sections.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});

setCourseInfo (aCourse);
outputSection (aCourse.sections);