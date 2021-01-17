const initState = {
    students: [
        {
            id: 1,
            email: "123",
            password: "123",
            isLoggedIn: false,
            avator: "/assets/images/avatar_g2.jpg",
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
            avator: "/assets/images/bandmember.jpg",
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
    ],
    questions: [
        {
            id: 1,
            author: "Marvelous Mo",
            date: "10:30",
            message:"What was was before was?",
            attachments: "file src here",
            replies: [
                {
                    id:1,
                    votes: 0,
                    author: "John Doe",
                    date: "12:30",
                    message: "Ramalepa hara likoti ha u lengope u khoho u khoho e mereti e metso, nokeng ho lula lithabela koluwa, banna ba hoja mahata a batho",
                    attachments: "file src here"
                },
                {
                    id:2,
                    votes: 0,
                    author: "John Doe",
                    date: "12:30",
                    message: "Ramalepa hara likoti ha u lengope u khoho u khoho e mereti e metso, nokeng ho lula lithabela koluwa, banna ba hoja mahata a batho",
                    attachments: "file src here"
                }
            ]
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
    if(action.type === 'ADD_QUESTION'){
        return{
            ...state,
            questions: [
                {
                    id: Math.random(),
                    author: "Marvelous Mo",
                    date: "10:30",
                    message: action.question.text,
                    attachments: "file src here",
                    replies: []
                },
                ...state.questions
            ]
        }
    }
    if(action.type === 'ADD_REPLY'){
        
        return{
            ...state,
            questions: state.questions.map(question =>{
                if(parseInt(question.id, 10) === parseInt(action.payload.questionId, 10)){
                    
                    return{
                        ...question, 
                        replies: [                            
                            {
                                id: Math.random(),
                                votes: 0,
                                author: "John Doe",
                                date: "12:30",
                                message: action.payload.reply,
                                attachments: "file src here"
                            },
                            ...question.replies
                        ]
                    }
                }
                return question
            })
        }
    }
    if(action.type === 'REPLY_VOTE'){
        return{
            ...state,
            questions: state.questions.map(question =>{
                if(parseInt(question.id, 10) === parseInt(action.payload.questionId, 10)){
                    
                    return{
                        ...question, 
                        replies: question.replies.map(reply =>{
                            if(parseInt(action.payload.replyId, 10) === parseInt(reply.id, 10)){
                                if(action.payload.voteType === 'ADD'){
                                    reply.votes++
                                }else{
                                    reply.votes--
                                }
                            }
                            return reply
                        })
                    }
                }
                return question
            })

        }
    }
    return state
}

export default rootReducer