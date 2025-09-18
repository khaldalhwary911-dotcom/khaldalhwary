// types.ts

export interface CourseMaterial {
    id: string;
    title: string;
    type: 'video' | 'document' | 'pdf';
    content: string; // YouTube URL, embed code, document content, or PDF URL
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface Quiz {
    id:string;
    title: string;
    questions: QuizQuestion[];
    timeLimit?: number; // in minutes
}

export interface Course {
    id: string;
    title: string;
    description: string;
    price: number;
    categoryId: string;
    materials: CourseMaterial[];
    quizId?: string;
    quizRequirement?: 'required' | 'optional';
}

export interface CourseCategory {
    id: string;
    name: {
        en: string;
        ar: string;
    };
}

interface BaseUser {
    id: string;
    name: string;
    email: string;
    password: string;
    avatar: string;
}

export interface Admin extends BaseUser {
    role: 'admin';
}

export interface QuizAttempt {
    quizId: string;
    score: number;
    totalQuestions: number;
    answers: (string | null)[];
    completedAt: string;
}

export interface Student extends BaseUser {
    role: 'student';
    balance: number;
    enrolledCourseIds: string[];
    preferredCategoryId: string;
    studentPhoneNumber: string;
    parentPhoneNumber: string;
    parentAnotherPhoneNumber: string;
    quizAttempts: QuizAttempt[];
    courseProgress: { [courseId: string]: string[] }; // keys are courseId, values are arrays of completed materialIds
}

export type AnyUser = Admin | Student;

export interface Transaction {
    id: string;
    userId: string;
    userName: string;
    type: 'purchase' | 'redemption';
    amount: number;
    date: string;
    description: string;
}

export interface FinancialCode {
    code: string;
    value: number;
    isUsed: boolean;
    usedBy?: string;
    usedAt?: string;
}

export interface DepositRequest {
    id: string;
    userId: string;
    userName: string;
    userEmail: string;
    amount: number;
    senderNumber: string;
    transactionImage: string;
    status: 'pending' | 'approved' | 'rejected';
    submittedAt: string;
}

export interface ChatMessage {
    id: string;
    senderId: string;
    senderRole: 'student' | 'admin';
    timestamp: string;
    content: string;
    contentType: 'text' | 'image';
}

export interface ChatConversation {
    id: string;
    studentId: string;
    studentName: string;
    messages: ChatMessage[];
    lastUpdated: string;
    isReadByAdmin: boolean;
}