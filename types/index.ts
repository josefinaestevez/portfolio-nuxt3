export type Author = {
    firstName: string;
    lastName: string;
    role: string;
    company: string;
};

export type FeedbackEntry = {
    author: Author;
    feedback: string;
    givenAt: Date;
};