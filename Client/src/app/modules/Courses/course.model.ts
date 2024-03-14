export enum LearningWay { Frontal=0, Zoom=1 }

export class Course {
    id?: number;
    name?: string;
    categoryId?: number;
    lessonsAmount?: number;
    startDate?: Date;
    courseSyllabus?: string[];
    learningWay?:LearningWay;
    lecturerId?:number;
    image?:string;
    constructor(){

    }

}