const initState = {
    students: [
        {
            id: 1,
            email: "123",
            password: "123",
            isLoggedIn: false,
            courses: [
                {
                    courseCode:'SESG9',
                },
                {
                    courseCode: 'MAMG9',
                },
                {
                    courseCode:'ENGG9',
                }
            ]
        },
        {
            id: 2,
            email: "abc",
            password: "abc",
            isLoggedIn: false,
            courses: [
                {
                    courseCode:'SESG12',
                },
                {
                    courseCode: 'MAMG12',
                },
                {
                    courseCode:'ENGG12',
                }
            ]
        }
    ],
    courses : [
        {
            id: 1,
            courseCode: 'SESG9',
            aca: 2021,
            instructor: 'Mr Khomo',
            resources: [
                {
                    resourceId: 1,
                    src: "",
                    title: "",
                    description: ""
                }
            ],
            lectures: [],
            announcements: [],
            students: [],
            results: []
        }
    ]
}

function rootReducer(state=initState, action){
    if(action.type === 'REGESTER_USER'){
        action.student.id = Math.random()
        action.student.isLoggedIn = false
        return{
            ...state,
            students: [...state.students, action.student]
        }
    }
    if(action.type === 'LOGIN_USER'){
        return{
            ...state,
            students: state.students.map(student => {
                if(student.id === action.id){
                    return{
                        ...student,
                        isLoggedIn: !student.isLoggedIn
                    }
                }
                return student
            })
        }
    }
    return state
}

export default rootReducer