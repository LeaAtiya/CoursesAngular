import { Pipe, PipeTransform } from "@angular/core";
import { LearningWay } from "../app/modules/Courses/course.model";


@Pipe({
    name: "IconPipe"
})
export class IconPipe implements PipeTransform {
    transform(value: any) {
        if (value == LearningWay.Zoom)
            return "assets\\learningWay\\0.png"
        if (value == LearningWay.Frontal)
            return "\\assets\\learningWay\\1.png"
        return ""
    }
}



