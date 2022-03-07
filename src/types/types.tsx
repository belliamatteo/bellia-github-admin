export type TypeClass = {
    code: string;
    courseTitle: string;
}

export type TypeStudent = {
    name: string;
    surname: string;
    login: string;
    classe: string;
    repos: string[]|undefined|null;
}