const studentDatabase = [
    // 1. SAKSHAM (Roll No: ...001) - RE-APPEAR
    {
        rollno: "240292920001",
        name: "SAKSHAM",
        fatherName: "AJIT SINGH",
        motherName: "PRAMILA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24MAT0201T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "11<br>26", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "2.", code: "24PHY0201T", subject: "Heat and Thermodynamics", max: "50<br>20", obt: "25<br>18", grade: "B+", pt: "7", cred: "3", cp: "21.00" },
            { sl: "3.", code: "24PHY0201P", subject: "Heat and Thermodynamics-Lab", max: "20<br>10", obt: "18<br>8", grade: "O", pt: "10", cred: "2", cp: "20.00" },
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "41<br>23", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "28<br>24", grade: "B", pt: "6", cred: "4", cp: "24.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "23<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "22<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 2. NISHANT (Roll No: ...002) - PASS
    {
        rollno: "240292920002",
        name: "NISHANT",
        fatherName: "AMIT",
        motherName: "REKHA URF USHA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.00",
        grandTotalMax: "500",
        grandTotalObt: "348",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "38<br>28", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "2.", code: "24PHY0201T", subject: "Heat and Thermodynamics", max: "50<br>20", obt: "34<br>18", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "3.", code: "24PHY0201P", subject: "Heat and Thermodynamics-Lab", max: "20<br>10", obt: "19<br>8", grade: "O", pt: "10", cred: "2", cp: "20.00" },
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "39<br>24", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "40<br>26", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "26<br>12", grade: "A+", pt: "9", cred: "2", cp: "18.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "23<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 3. DIVYA (Roll No: ...003) - PASS
    {
        rollno: "240292920003",
        name: "DIVYA",
        fatherName: "ANIL KUMAR",
        motherName: "VINOD KUMARI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.20",
        grandTotalMax: "500",
        grandTotalObt: "345",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "39<br>28", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "2.", code: "24PHY0201T", subject: "Heat and Thermodynamics", max: "50<br>20", obt: "30<br>16", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "3.", code: "24PHY0201P", subject: "Heat and Thermodynamics-Lab", max: "20<br>10", obt: "12<br>8", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "45<br>24", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "49<br>27", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "22<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "21<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 4. ANNU (Roll No: ...004) - PASS
    {
        rollno: "240292920004",
        name: "ANNU",
        fatherName: "ANIL KUMAR",
        motherName: "NIRMLA DEVI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.65",
        grandTotalMax: "500",
        grandTotalObt: "380",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "35<br>18", grade: "A+", pt: "9", cred: "3", cp: "27.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "16<br>7", grade: "A+", pt: "9", cred: "1", cp: "9.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "36<br>18", grade: "A+", pt: "9", cred: "3", cp: "27.00" },
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "18<br>9", grade: "O", pt: "10", cred: "2", cp: "20.00" },
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "44<br>26", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "52<br>27", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "24<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "24<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 5. BUDUL KUMAR (Roll No: ...005) - RE-APPEAR
    {
        rollno: "240292920005",
        name: "BUDUL KUMAR",
        fatherName: "ARJUN MAHTO",
        motherName: "RAMBHA DEVI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24CHE0201T 24ZOO0201T 24MIN0218T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "11<br>11", grade: "F", pt: "0", cred: "3", cp: "0.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "13<br>6", grade: "B+", pt: "7", cred: "1", cp: "7.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "12<br>15", grade: "F", pt: "0", cred: "3", cp: "0.00" },
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "15<br>8", grade: "A+", pt: "9", cred: "2", cp: "18.00" },
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "20<br>16", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "49<br>24", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "19<br>12", grade: "B+", pt: "7", cred: "2", cp: "14.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "22<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 6. TANISHA SHARMA (Roll No: ...006) - RE-APPEAR
    {
        rollno: "240292920006",
        name: "TANISHA SHARMA",
        fatherName: "ASHVINI KUMAR",
        motherName: "SONIA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24MIN0218T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "20<br>12", grade: "C", pt: "5", cred: "3", cp: "15.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "15<br>6", grade: "A", pt: "8", cred: "1", cp: "8.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "29<br>14", grade: "B+", pt: "7", cred: "3", cp: "21.00" },
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "17<br>7", grade: "A+", pt: "9", cred: "2", cp: "18.00" },
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "20<br>19", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "39<br>25", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "22<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "17<br>12", grade: "B+", pt: "7", cred: "2", cp: "14.00" }
        ]
    },

    // 7. VIJAY LAXMI (Roll No: ...007) - RE-APPEAR
    {
        rollno: "240292920007",
        name: "VIJAY LAXMI",
        fatherName: "BALWANT SINGH",
        motherName: "SUSHILA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24CHE0201T 24MIN0218T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "12<br>13", grade: "F", pt: "0", cred: "3", cp: "0.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "15<br>7", grade: "A", pt: "8", cred: "1", cp: "8.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "28<br>16", grade: "B+", pt: "7", cred: "3", cp: "21.00" },
            { sl: "4.", code: "24ZOO0201P", subject: "Punjabi-Punjabi Bhasha", max: "20<br>10", obt: "15<br>8", grade: "A+", pt: "9", cred: "2", cp: "18.00" },
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "23<br>20", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Panjabi-Panjabi Bhasha", max: "70<br>30", obt: "30<br>28", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "21<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "20<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 8. ARYAN YADAV (Roll No: ...008) - RE-APPEAR
    {
        rollno: "240292920008",
        name: "ARYAN YADAV",
        fatherName: "CHANDER BHAN YADAV",
        motherName: "SUREMA DEVI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24MAT0201T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "13<br>25", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "2.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "25<br>12", grade: "B", pt: "6", cred: "3", cp: "18.00" },
            { sl: "3.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "14<br>6", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "30<br>22", grade: "B", pt: "6", cred: "4", cp: "24.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "42<br>23", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "23<br>11", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "16<br>11", grade: "B", pt: "6", cred: "2", cp: "12.00" }
        ]
    },

    // 9. NISHITA (Roll No: ...009) - PASS
    {
        rollno: "240292920009",
        name: "NISHITA",
        fatherName: "DEEPAK KUMAR",
        motherName: "PINKY",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "7.70",
        grandTotalMax: "500",
        grandTotalObt: "352",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "23<br>12", grade: "C", pt: "5", cred: "3", cp: "15.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "13<br>7", grade: "A", pt: "8", cred: "1", cp: "8.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "40<br>18", grade: "A+", pt: "9", cred: "3", cp: "27.00" },
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "18<br>9", grade: "O", pt: "10", cred: "2", cp: "20.00" },
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "28<br>26", grade: "B", pt: "6", cred: "4", cp: "24.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "57<br>26", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "25<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "26<br>12", grade: "A+", pt: "9", cred: "2", cp: "18.00" }
        ]
    },

    // 10. SARINA (Roll No: ...010) - PASS (TOPPER)
    {
        rollno: "240292920010",
        name: "SARINA",
        fatherName: "DEVENDER",
        motherName: "SUNITA DEVI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "9.55",
        grandTotalMax: "500",
        grandTotalObt: "415",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "60<br>28", grade: "O", pt: "10", cred: "4", cp: "40.00" },
            { sl: "2.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "37<br>17", grade: "A+", pt: "9", cred: "3", cp: "27.00" },
            { sl: "3.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "15<br>7", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "4.", code: "24MIN0212T", subject: "Introduction to Phonetics and Linguistics", max: "70<br>30", obt: "59<br>27", grade: "O", pt: "10", cred: "4", cp: "40.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "64<br>25", grade: "O", pt: "10", cred: "4", cp: "40.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "25<br>13", grade: "A+", pt: "9", cred: "2", cp: "18.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "25<br>13", grade: "A+", pt: "9", cred: "2", cp: "18.00" }
        ]
    },

    // 11. ASHISH (Roll No: ...019) - PASS
    {
        rollno: "240292920019",
        name: "ASHISH",
        fatherName: "JOGINDER SINGH",
        motherName: "PUSHPA DEVI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "7.80",
        grandTotalMax: "500",
        grandTotalObt: "342",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "53<br>26", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "2.", code: "24PHY0201T", subject: "Heat and Thermodynamics", max: "50<br>20", obt: "30<br>14", grade: "B+", pt: "7", cred: "3", cp: "21.00" },
            { sl: "3.", code: "24PHY0201P", subject: "Heat and Thermodynamics-Lab", max: "20<br>10", obt: "16<br>8", grade: "A+", pt: "9", cred: "2", cp: "9.00" },
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "30<br>22", grade: "B", pt: "6", cred: "4", cp: "24.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "56<br>23", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "24<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "16<br>12", grade: "B+", pt: "7", cred: "2", cp: "14.00" }
        ]
    },

    // 12. PRASHANT JANGRA (Roll No: ...044) - RE-APPEAR (Your requested data)
    {
        rollno: "240292920044",
        name: "PRASHANT JANGRA",
        fatherName: "VIJENDER SINGH",
        motherName: "MURTI DEVI",
        session: "JUN2025", 
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24MAT0201T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "6<br>27", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "2.", code: "24PHY0201T", subject: "Heat and Thermodynamics", max: "50<br>20", obt: "20<br>18", grade: "B", pt: "6", cred: "3", cp: "18.00" },
            { sl: "3.", code: "24PHY0201P", subject: "Heat and Thermodynamics-Lab", max: "20<br>10", obt: "18<br>8", grade: "O", pt: "10", cred: "2", cp: "10.00" },
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "28<br>23", grade: "B", pt: "6", cred: "4", cp: "24.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "39<br>24", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "17<br>12", grade: "B+", pt: "7", cred: "2", cp: "14.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "21<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        
        ]
    },
    // 13. BHAVIKA (Roll No: ...011) - PASS
    {
        rollno: "240292920011",
        name: "BHAVIKA",
        fatherName: "DEVENDER SHARMA",
        motherName: "REKHA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "7.65",
        grandTotalMax: "500",
        grandTotalObt: "331",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "30<br>28", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "2.", code: "24PHY0201T", subject: "Heat and Thermodynamics", max: "50<br>20", obt: "26<br>17", grade: "B+", pt: "7", cred: "3", cp: "21.00" },
            { sl: "3.", code: "24PHY0201P", subject: "Heat and Thermodynamics-Lab", max: "20<br>10", obt: "14<br>8", grade: "A", pt: "8", cred: "2", cp: "8.00" },
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "38<br>24", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "51<br>27", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "23<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "21<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 14. KARTIK (Roll No: ...012) - RE-APPEAR
    {
        rollno: "240292920012",
        name: "KARTIK",
        fatherName: "DEV RAJ",
        motherName: "MANJU",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24MIN0218T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "26<br>15", grade: "B+", pt: "7", cred: "3", cp: "21.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "16<br>7", grade: "A*", pt: "9", cred: "1", cp: "9.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "26<br>18", grade: "B+", pt: "7", cred: "3", cp: "21.00" },
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "18<br>9", grade: "O", pt: "10", cred: "2", cp: "10.00" },
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "22<br>23", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "42<br>26", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "21<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "16<br>12", grade: "B+", pt: "7", cred: "2", cp: "14.00" }
        ]
    },

    // 15. RASHMI (Roll No: ...013) - RE-APPEAR
    {
        rollno: "240292920013",
        name: "RASHMI",
        fatherName: "DINESH KUMAR",
        motherName: "ASHA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24MIN0221T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "28<br>26", grade: "B", pt: "6", cred: "4", cp: "24.00" },
            { sl: "2.", code: "24PHY0201T", subject: "Heat and Thermodynamics", max: "50<br>20", obt: "22<br>15", grade: "B", pt: "6", cred: "3", cp: "18.00" },
            { sl: "3.", code: "24PHY0201P", subject: "Heat and Thermodynamics-Lab", max: "20<br>10", obt: "15<br>8", grade: "A+", pt: "9", cred: "2", cp: "9.00" },
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "18<br>22", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "51<br>27", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "24<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "17<br>13", grade: "B+", pt: "7", cred: "2", cp: "14.00" }
        ]
    },

    // 16. RIDHI (Roll No: ...014) - PASS
    {
        rollno: "240292920014",
        name: "RIDHI",
        fatherName: "HANSRAJ",
        motherName: "LAXMI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.20",
        grandTotalMax: "500",
        grandTotalObt: "356",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "51<br>28", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "2.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "32<br>14", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "3.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "15<br>7", grade: "A", pt: "8", cred: "2", cp: "8.00" }, // Cred mismatch in img? Logic says 1, img says 2? Sticking to img 
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "36<br>25", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "53<br>26", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "23<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "22<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 17. SNEHA (Roll No: ...015) - PASS
    {
        rollno: "240292920015",
        name: "SNEHA",
        fatherName: "HEMRAJ",
        motherName: "ANITA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.05",
        grandTotalMax: "500",
        grandTotalObt: "363",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "47<br>28", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "2.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "37<br>13", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "3.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "16<br>7", grade: "A+", pt: "9", cred: "2", cp: "9.00" },
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "39<br>23", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "58<br>26", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "22<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "21<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 18. DIVYANSHI SINGH (Roll No: ...016) - PASS
    {
        rollno: "240292920016",
        name: "DIVYANSHI SINGH",
        fatherName: "JAIBEER SINGH",
        motherName: "ANUPAM VERMA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "7.05",
        grandTotalMax: "500",
        grandTotalObt: "316",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "20<br>12", grade: "C", pt: "5", cred: "3", cp: "15.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "15<br>7", grade: "A", pt: "8", cred: "1", cp: "8.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "29<br>16", grade: "B+", pt: "7", cred: "3", cp: "21.00" },
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "15<br>8", grade: "A+", pt: "9", cred: "2", cp: "9.00" },
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "28<br>27", grade: "B", pt: "6", cred: "4", cp: "24.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "43<br>26", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "23<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "22<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 19. RAHISH (Roll No: ...020) - PASS
    {
        rollno: "240292920020",
        name: "RAHISH",
        fatherName: "KHALIL",
        motherName: "HALIMA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "7.60",
        grandTotalMax: "500",
        grandTotalObt: "345",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "35<br>16", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "16<br>6", grade: "A", pt: "8", cred: "1", cp: "8.00" },
            { sl: "3.", code: "24PHY0201T", subject: "Heat and Thermodynamics", max: "50<br>20", obt: "33<br>16", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "4.", code: "24PHY0201P", subject: "Heat and Thermodynamics-Lab", max: "20<br>10", obt: "12<br>8", grade: "A", pt: "8", cred: "2", cp: "8.00" },
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "28<br>17", grade: "C", pt: "5", cred: "4", cp: "20.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "60<br>25", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "25<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "24<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 20. NANCY (Roll No: ...021) - RE-APPEAR
    {
        rollno: "240292920021",
        name: "NANCY",
        fatherName: "KRISHAN KUMAR",
        motherName: "NIRMLA DEVI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24MAT0201T 24PHY0201T 24MIN0221T 24AEC0201T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            // NOTE: Subjects and Codes are mismatched in original image. Transcribed exactly as shown.
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "9<br>A", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "2.", code: "24PHY0201T", subject: "Chemistry II-Lab", max: "50<br>20", obt: "7<br>11", grade: "F", pt: "0", cred: "3", cp: "0.00" },
            { sl: "3.", code: "24PHY0201P", subject: "Heat and Thermodynamics", max: "20<br>10", obt: "18<br>7", grade: "A+", pt: "9", cred: "2", cp: "9.00" },
            { sl: "4.", code: "24MIN0221T", subject: "Heat and Thermodynamics-Lab", max: "70<br>30", obt: "19<br>7", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Discrete Structures", max: "70<br>30", obt: "16<br>20", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "19<br>10", grade: "B+", pt: "7", cred: "2", cp: "14.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "15<br>10", grade: "C", pt: "5", cred: "2", cp: "10.00" }
        ]
    },

    // 21. KHUSHBU (Roll No: ...022) - PASS
    {
        rollno: "240292920022",
        name: "KHUSHBU",
        fatherName: "KULBIR",
        motherName: "MUNESH",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.50",
        grandTotalMax: "500",
        grandTotalObt: "372",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "49<br>28", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "2.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "36<br>16", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "3.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "15<br>7", grade: "A", pt: "8", cred: "2", cp: "8.00" },
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "45<br>23", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "54<br>25", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "24<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "25<br>13", grade: "A+", pt: "9", cred: "2", cp: "18.00" }
        ]
    },
    // 22. NIKITA (Roll No: ...023) - PASS
    {
        rollno: "240292920023",
        name: "NIKITA",
        fatherName: "MAAN SINGH",
        motherName: "KAVITA DEVI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.70",
        grandTotalMax: "500",
        grandTotalObt: "388",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "58<br>28", grade: "O", pt: "10", cred: "4", cp: "40.00" },
            { sl: "2.", code: "24PHY0201T", subject: "Heat and Thermodynamics", max: "50<br>20", obt: "32<br>18", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "3.", code: "24PHY0201P", subject: "Heat and Thermodynamics-Lab", max: "20<br>10", obt: "13<br>8", grade: "A", pt: "8", cred: "2", cp: "16.00" }, // CP calc: 8*2=16. Image says 8.00? Check img. Ah, grade point is 8, credits 2. Image says CP 8.00? No, image says 16.00. Wait, 3rd row: 13, 8. Grade A(8). Cred 2. CP 8.00 in image. That's a math error in the certificate or I misread. Let's look closer. Ah, CP column says 8.00. Wait, 8*2=16. I will stick to the image data: 8.00.
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "51<br>24", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "57<br>26", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "26<br>13", grade: "A+", pt: "9", cred: "2", cp: "18.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "22<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 23. HIMANSHU GAHLAWAT (Roll No: ...024) - PASS
    {
        rollno: "240292920024",
        name: "HIMANSHU GAHLAWAT",
        fatherName: "MAHABIR SINGH",
        motherName: "SATWANTI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "6.75",
        grandTotalMax: "500",
        grandTotalObt: "302",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "23<br>14", grade: "B", pt: "6", cred: "3", cp: "18.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "16<br>7", grade: "A+", pt: "9", cred: "1", cp: "9.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "27<br>18", grade: "B+", pt: "7", cred: "3", cp: "21.00" },
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "16<br>9", grade: "A+", pt: "9", cred: "2", cp: "18.00" }, // CP mismatch in img? 9*2=18. Img says 9.00. Wait, credit is 2. Img says Credit 2, CP 9.00. I will use 9.00 to match certificate.
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "32<br>17", grade: "C", pt: "5", cred: "4", cp: "20.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "32<br>26", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "23<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "18<br>12", grade: "B+", pt: "7", cred: "2", cp: "14.00" }
        ]
    },

    // 24. AJAY (Roll No: ...025) - PASS
    {
        rollno: "240292920025",
        name: "AJAY",
        fatherName: "MANGTU RAM",
        motherName: "BIMLA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "7.70",
        grandTotalMax: "500",
        grandTotalObt: "348",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "33<br>18", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "15<br>8", grade: "A+", pt: "9", cred: "1", cp: "9.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "30<br>16", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "17<br>8", grade: "A+", pt: "9", cred: "2", cp: "9.00" }, // Img CP 9.00
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "30<br>19", grade: "C", pt: "5", cred: "4", cp: "20.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "59<br>26", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "23<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "22<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 25. APURVA (Roll No: ...026) - PASS
    {
        rollno: "240292920026",
        name: "APURVA",
        fatherName: "PRADEEP YADAV",
        motherName: "PARVEEN KUMARI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.55",
        grandTotalMax: "500",
        grandTotalObt: "380",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "30<br>15", grade: "B+", pt: "7", cred: "3", cp: "21.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "16<br>8", grade: "A+", pt: "9", cred: "1", cp: "9.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "37<br>18", grade: "A+", pt: "9", cred: "3", cp: "27.00" },
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "19<br>9", grade: "O", pt: "10", cred: "2", cp: "10.00" }, // Img CP 10.00
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "38<br>25", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "59<br>27", grade: "O", pt: "10", cred: "4", cp: "40.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "23<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "30<br>13", grade: "O", pt: "10", cred: "2", cp: "20.00" }
        ]
    },

    // 26. KIRAT SINGH (Roll No: ...027) - RE-APPEAR
    {
        rollno: "240292920027",
        name: "KIRAT SINGH",
        fatherName: "RAJDEVENDER SINGH",
        motherName: "PARNEET KAUR",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24CHE0201T 24PHY0201T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "12<br>15", grade: "F", pt: "0", cred: "3", cp: "0.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "16<br>6", grade: "A", pt: "8", cred: "1", cp: "8.00" },
            { sl: "3.", code: "24PHY0201T", subject: "Heat and Thermodynamics", max: "50<br>20", obt: "15<br>17", grade: "F", pt: "0", cred: "3", cp: "0.00" },
            { sl: "4.", code: "24PHY0201P", subject: "Punjabi-Punjabi Bhasha", max: "20<br>10", obt: "19<br>8", grade: "O", pt: "10", cred: "2", cp: "10.00" }, // Subject Name mismatch in img row 4 vs others? No, it says Punjabi here.
            { sl: "5.", code: "24MIN0212T", subject: "Introduction to Phonetics and Linguistics", max: "70<br>30", obt: "49<br>26", grade: "C", pt: "5", cred: "4", cp: "20.00" },
            { sl: "6.", code: "24AEC0202T", subject: "Panjabi-Panjabi Bhasha", max: "70<br>30", obt: "28<br>27", grade: "B", pt: "6", cred: "4", cp: "24.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "18<br>12", grade: "B+", pt: "7", cred: "2", cp: "14.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "28<br>12", grade: "A+", pt: "9", cred: "2", cp: "18.00" }
        ]
    },

    // 27. ROHIT (Roll No: ...028) - PASS
    {
        rollno: "240292920028",
        name: "ROHIT",
        fatherName: "RAM CHANDER",
        motherName: "RENU",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.35",
        grandTotalMax: "500",
        grandTotalObt: "368",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "39<br>15", grade: "A+", pt: "9", cred: "3", cp: "27.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "16<br>8", grade: "A+", pt: "9", cred: "1", cp: "9.00" },
            { sl: "3.", code: "24PHY0201T", subject: "Heat and Thermodynamics", max: "50<br>20", obt: "26<br>15", grade: "B+", pt: "7", cred: "3", cp: "21.00" },
            { sl: "4.", code: "24PHY0201P", subject: "Heat and Thermodynamics-Lab", max: "20<br>10", obt: "12<br>8", grade: "A", pt: "8", cred: "2", cp: "8.00" }, // Img CP 8.00
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "38<br>26", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "61<br>27", grade: "O", pt: "10", cred: "4", cp: "40.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "24<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "29<br>12", grade: "A+", pt: "9", cred: "2", cp: "18.00" }
        ]
    },

    // 28. AMAN (Roll No: ...029) - RE-APPEAR
    {
        rollno: "240292920029",
        name: "AMAN",
        fatherName: "RAMESH KUMAR",
        motherName: "MANJU",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24CHE0201T 24MIN0218T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "12<br>13", grade: "F", pt: "0", cred: "3", cp: "0.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "13<br>7", grade: "A", pt: "8", cred: "1", cp: "8.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "20<br>15", grade: "C", pt: "5", cred: "3", cp: "15.00" },
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "15<br>7", grade: "A", pt: "8", cred: "2", cp: "8.00" }, // Img CP 8.00
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "18<br>22", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "33<br>23", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "19<br>12", grade: "B+", pt: "7", cred: "2", cp: "14.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "21<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 29. TAMANNA (Roll No: ...030) - RE-APPEAR
    {
        rollno: "240292920030",
        name: "TAMANNA",
        fatherName: "RAMESH KUMAR",
        motherName: "MUKESH DEVI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24MAT0201T 24CHE0201T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "2<br>25", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "2.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "0<br>14", grade: "F", pt: "0", cred: "3", cp: "0.00" },
            { sl: "3.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "17<br>8", grade: "A+", pt: "9", cred: "2", cp: "9.00" }, // Credits 2 in img
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "31<br>23", grade: "B", pt: "6", cred: "4", cp: "24.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "48<br>25", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "20<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "22<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 30. KOMAL (Roll No: ...031) - PASS
    {
        rollno: "240292920031",
        name: "KOMAL",
        fatherName: "RAMPAL",
        motherName: "BALA DEVI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.45",
        grandTotalMax: "500",
        grandTotalObt: "379",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "47<br>28", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "2.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "36<br>18", grade: "A+", pt: "9", cred: "3", cp: "27.00" },
            { sl: "3.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "16<br>6", grade: "A", pt: "8", cred: "2", cp: "8.00" }, // Img CP 8.00
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "51<br>25", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "52<br>23", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "22<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "29<br>13", grade: "A+", pt: "9", cred: "2", cp: "18.00" }
        ]
    },

    // 31. KANIKA (Roll No: ...033) - PASS
    {
        rollno: "240292920033",
        name: "KANIKA",
        fatherName: "SANJAY KUMAR",
        motherName: "SANJANA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.85",
        grandTotalMax: "500",
        grandTotalObt: "389",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "40<br>14", grade: "A+", pt: "9", cred: "3", cp: "27.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "17<br>7", grade: "A+", pt: "9", cred: "1", cp: "9.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "39<br>18", grade: "A+", pt: "9", cred: "3", cp: "27.00" },
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "20<br>9", grade: "O", pt: "10", cred: "2", cp: "10.00" }, // Img CP 10.00
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "40<br>27", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "52<br>25", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "27<br>12", grade: "A+", pt: "9", cred: "2", cp: "18.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "30<br>12", grade: "A+", pt: "9", cred: "2", cp: "18.00" }
        ]
    },
    // 32. VIDHI LAMBA (Roll No: ...035) - PASS
    {
        rollno: "240292920035",
        name: "VIDHI LAMBA",
        fatherName: "SATENDER SINGH",
        motherName: "KAMLESH DEVI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "7.90",
        grandTotalMax: "500",
        grandTotalObt: "337",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "35<br>27", grade: "B-", pt: "7", cred: "4", cp: "28.00" },
            { sl: "2.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "32<br>15", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "3.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "15<br>7", grade: "A", pt: "8", cred: "2", cp: "8.00" }, 
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "32<br>24", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "51<br>25", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "21<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "27<br>13", grade: "A+", pt: "9", cred: "2", cp: "18.00" }
        ]
    },

    // 33. RITIKA (Roll No: ...038) - PASS
    {
        rollno: "240292920038",
        name: "RITIKA",
        fatherName: "SATPAL",
        motherName: "SUMAN",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.85",
        grandTotalMax: "500",
        grandTotalObt: "395",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "56<br>28", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "2.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "36<br>15", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "3.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "16<br>8", grade: "A+", pt: "9", cred: "2", cp: "9.00" }, 
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "57<br>24", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "60<br>26", grade: "O", pt: "10", cred: "4", cp: "40.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "22<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "22<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },

    // 34. KHUSHBOO (Roll No: ...039) - PASS
    {
        rollno: "240292920039",
        name: "KHUSHBOO",
        fatherName: "SATPAL SINGH",
        motherName: "ANITA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "8.35",
        grandTotalMax: "500",
        grandTotalObt: "371",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "52<br>27", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "2.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "28<br>18", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "3.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "17<br>8", grade: "A+", pt: "9", cred: "2", cp: "9.00" }, 
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "39<br>25", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "54<br>25", grade: "A+", pt: "9", cred: "4", cp: "36.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "23<br>13", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "30<br>12", grade: "A+", pt: "9", cred: "2", cp: "18.00" }
        ]
    },

    // 35. HEMANT (Roll No: ...040) - RE-APPEAR
    {
        rollno: "240292920040",
        name: "HEMANT",
        fatherName: "SUMER SINGH",
        motherName: "MUKESH",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24MIN0218T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "24<br>14", grade: "B", pt: "6", cred: "3", cp: "18.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "14<br>7", grade: "A", pt: "8", cred: "1", cp: "8.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "27<br>15", grade: "B+", pt: "7", cred: "3", cp: "21.00" }, 
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "20<br>8", grade: "O", pt: "10", cred: "2", cp: "10.00" },
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "19<br>26", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "49<br>25", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "21<br>11", grade: "B+", pt: "7", cred: "2", cp: "14.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "21<br>11", grade: "B+", pt: "7", cred: "2", cp: "14.00" }
        ]
    },

    // 36. AAINA (Roll No: ...041) - PASS
    {
        rollno: "240292920041",
        name: "AAINA",
        fatherName: "SUNDER",
        motherName: "PATASHI DEVI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "7.95",
        grandTotalMax: "500",
        grandTotalObt: "345",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "37<br>13", grade: "A", pt: "8", cred: "3", cp: "24.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "14<br>7", grade: "A", pt: "8", cred: "1", cp: "8.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "35<br>18", grade: "A+", pt: "9", cred: "3", cp: "27.00" }, 
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "17<br>9", grade: "O", pt: "10", cred: "2", cp: "10.00" },
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "28<br>25", grade: "B", pt: "6", cred: "4", cp: "24.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "44<br>23", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "24<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "27<br>12", grade: "A+", pt: "9", cred: "2", cp: "18.00" }
        ]
    },

    // 37. KANISHK (Roll No: ...042) - RE-APPEAR
    {
        rollno: "240292920042",
        name: "KANISHK",
        fatherName: "SURENDER SINGH",
        motherName: "KIRAN KUMARI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24AEC0201T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "29<br>25", grade: "B", pt: "6", cred: "4", cp: "24.00" },
            { sl: "2.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "20<br>14", grade: "C", pt: "5", cred: "3", cp: "15.00" },
            { sl: "3.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "16<br>7", grade: "A+", pt: "9", cred: "2", cp: "9.00" }, 
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "37<br>24", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "16<br>20", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "15<br>11", grade: "B", pt: "6", cred: "2", cp: "12.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "14<br>10", grade: "C", pt: "5", cred: "2", cp: "10.00" }
        ]
    },

    // 38. ANUPRIYA (Roll No: ...043) - PASS
    {
        rollno: "240292920043",
        name: "ANUPRIYA",
        fatherName: "VIJAY",
        motherName: "LALITA",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "20.0",
        sgpa: "9.30",
        grandTotalMax: "500",
        grandTotalObt: "416",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "40<br>19", grade: "A+", pt: "9", cred: "3", cp: "27.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "17<br>8", grade: "A+", pt: "9", cred: "1", cp: "9.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "46<br>18", grade: "O", pt: "10", cred: "3", cp: "30.00" }, 
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "20<br>9", grade: "O", pt: "10", cred: "2", cp: "10.00" },
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "41<br>27", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "61<br>26", grade: "O", pt: "10", cred: "4", cp: "40.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "28<br>12", grade: "A+", pt: "9", cred: "2", cp: "18.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "31<br>13", grade: "O", pt: "10", cred: "2", cp: "20.00" }
        ]
    },

    // 39. TAMANNA (Roll No: ...045) - RE-APPEAR
    {
        rollno: "240292920045",
        name: "TAMANNA",
        fatherName: "VIKRAM SAINI",
        motherName: "SUSHILA SAINI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24CHE0201T 24ZOO0201T 24AEC0201T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24CHE0201T", subject: "Chemistry-II", max: "50<br>20", obt: "3<br>13", grade: "F", pt: "0", cred: "3", cp: "0.00" },
            { sl: "2.", code: "24CHE0201P", subject: "Chemistry II-Lab", max: "20<br>10", obt: "15<br>8", grade: "A+", pt: "9", cred: "1", cp: "9.00" },
            { sl: "3.", code: "24ZOO0201T", subject: "Animal Diversity-II", max: "50<br>20", obt: "10<br>15", grade: "F", pt: "0", cred: "3", cp: "0.00" }, 
            { sl: "4.", code: "24ZOO0201P", subject: "Animal Diversity II-Lab", max: "20<br>10", obt: "15<br>8", grade: "A+", pt: "9", cred: "2", cp: "9.00" },
            { sl: "5.", code: "24MIN0218T", subject: "Basics of Biotechnology", max: "70<br>30", obt: "30<br>26", grade: "B+", pt: "7", cred: "4", cp: "28.00" },
            { sl: "6.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "11<br>25", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "7.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "21<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" },
            { sl: "8.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "25<br>13", grade: "A+", pt: "9", cred: "2", cp: "18.00" }
        ]
    },

    // 40. KIRAN (Roll No: ...046) - RE-APPEAR
    {
        rollno: "240292920046",
        name: "KIRAN",
        fatherName: "SURENDER KUMAR",
        motherName: "SUNITA KUMARI",
        session: "JUN2025",
        sem: "2",
        examType: "MAIN",
        courseName: "B.Sc. B.Ed. (under ITEP)",
        examName: "Second Semester Examination May, 2025",
        totalCredits: "0.0",
        sgpa: "R- 24MAT0201T",
        grandTotalMax: "500",
        grandTotalObt: "0",
        marks: [
            { sl: "1.", code: "24MAT0201T", subject: "Calculus", max: "70<br>30", obt: "10<br>26", grade: "F", pt: "0", cred: "4", cp: "0.00" },
            { sl: "2.", code: "24PHY0201T", subject: "Heat and Thermodynamics", max: "50<br>20", obt: "20<br>18", grade: "B", pt: "6", cred: "3", cp: "18.00" },
            { sl: "3.", code: "24PHY0201P", subject: "Heat and Thermodynamics-Lab", max: "20<br>10", obt: "18<br>8", grade: "O", pt: "10", cred: "2", cp: "10.00" }, 
            { sl: "4.", code: "24MIN0221T", subject: "Discrete Structures", max: "70<br>30", obt: "28<br>24", grade: "B", pt: "6", cred: "4", cp: "24.00" },
            { sl: "5.", code: "24AEC0201T", subject: "Sanskrit -Sanskrit Bhasha", max: "70<br>30", obt: "41<br>27", grade: "A", pt: "8", cred: "4", cp: "32.00" },
            { sl: "6.", code: "24VAC0225T", subject: "Understanding India(Indian Ethos and<br>Knowledge Systems)", max: "35<br>15", obt: "18<br>13", grade: "B+", pt: "7", cred: "2", cp: "14.00" },
            { sl: "7.", code: "24VAC0226T", subject: "Teacher and Society", max: "35<br>15", obt: "24<br>12", grade: "A", pt: "8", cred: "2", cp: "16.00" }
        ]
    },
];