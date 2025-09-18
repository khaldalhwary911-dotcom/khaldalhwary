import { CourseCategory, Quiz, Course, AnyUser, Transaction, FinancialCode, DepositRequest, ChatConversation } from './types';

export const COURSE_CATEGORIES: CourseCategory[] = [
    { id: 'cat-1', name: { en: 'Primary Stage', ar: 'المرحلة الابتدائية' } },
    { id: 'cat-2', name: { en: 'Middle School', ar: 'المرحلة الإعدادية' } },
    { id: 'cat-3', name: { en: 'High School', ar: 'المرحلة الثانوية' } },
];

export const QUIZZES: Quiz[] = [
    {
        id: 'quiz-1',
        title: 'Basics of Arabic Grammar',
        timeLimit: 10,
        questions: [
            { id: 'q-1-1', question: 'What is a "noun" in Arabic?', options: ['اسم', 'فعل', 'حرف', 'جملة'], correctAnswer: 'اسم' },
            { id: 'q-1-2', question: 'What is a "verb" in Arabic?', options: ['اسم', 'فعل', 'حرف', 'جملة'], correctAnswer: 'فعل' },
        ]
    }
];

export const COURSES: Course[] = [
    {
        id: 'course-1',
        title: 'Arabic for Beginners',
        description: 'A comprehensive course covering the basics of the Arabic language for middle school students.',
        price: 250,
        categoryId: 'cat-2',
        materials: [
            { id: 'mat-1-1', title: 'Introduction to Arabic Alphabet', type: 'video', content: 'https://www.youtube.com/watch?v=e_k_L-bOq4o' },
            { id: 'mat-1-2', title: 'Lesson 1: Common Greetings', type: 'video', content: 'https://www.youtube.com/watch?v=e_k_L-bOq4o' },
            { id: 'mat-1-3', title: 'Reading Practice 1', type: 'document', content: 'Document content for reading practice.' },
        ],
        quizId: 'quiz-1',
        quizRequirement: 'optional',
    },
    {
        id: 'course-2',
        title: 'Advanced Arabic Literature',
        description: 'Explore the depths of Arabic literature with this advanced course for high school students.',
        price: 400,
        categoryId: 'cat-3',
        materials: [
            { id: 'mat-2-1', title: 'Pre-Islamic Poetry', type: 'video', content: 'https://www.youtube.com/watch?v=e_k_L-bOq4o' },
            { id: 'mat-2-2', title: 'The Golden Age of Arabic Literature', type: 'document', content: 'A deep dive into the Abbasid era.' },
        ]
    },
    {
        id: 'course-3',
        title: 'Arabic for Primary Students',
        description: 'A fun and interactive course to introduce young learners to the Arabic language.',
        price: 150,
        categoryId: 'cat-1',
        materials: [
            { id: 'mat-3-1', title: 'Learning with Colors', type: 'video', content: 'https://www.youtube.com/watch?v=e_k_L-bOq4o' },
        ]
    }
];

export const USERS: AnyUser[] = [
    {
        id: 'user-admin',
        name: 'Ahmed Khaled',
        email: 'ahmed.khaled7835@gmail.com',
        password: 'Amr@355010',
        role: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=Ahmed+Khaled&background=333&color=fff',
    },
    {
        id: 'user-student-1',
        name: 'Ahmed Mohamed',
        email: 'ahmed@example.com',
        password: 'password',
        role: 'student',
        avatar: 'https://ui-avatars.com/api/?name=Ahmed+Mohamed&background=0D8ABC&color=fff',
        balance: 500,
        enrolledCourseIds: ['course-1'],
        preferredCategoryId: 'cat-2',
        studentPhoneNumber: '01234567890',
        parentPhoneNumber: '01098765432',
        parentAnotherPhoneNumber: '01123456789',
        quizAttempts: [],
        courseProgress: {
            'course-1': ['mat-1-1']
        }
    },
    {
        id: 'user-student-2',
        name: 'Fatima Ali',
        email: 'fatima@example.com',
        password: 'password',
        role: 'student',
        avatar: 'https://ui-avatars.com/api/?name=Fatima+Ali&background=0D8ABC&color=fff',
        balance: 100,
        enrolledCourseIds: [],
        preferredCategoryId: 'cat-3',
        studentPhoneNumber: '01234567891',
        parentPhoneNumber: '01098765433',
        parentAnotherPhoneNumber: '01123456780',
        quizAttempts: [],
        courseProgress: {}
    }
];

export const TRANSACTIONS: Transaction[] = [];
export const FINANCIAL_CODES: FinancialCode[] = [];
export const DEPOSIT_REQUESTS: DepositRequest[] = [];
export const CHAT_CONVERSATIONS: ChatConversation[] = [];