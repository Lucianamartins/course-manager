import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppPipeModule } from '../pipe/app-pipe-module';
import { ReplacePipe } from '../pipe/replace.pipe';
import { StarModule } from '../shared/component/star.module';
import CourseInfoComponent from './course-info.component';
import { CourseListComponent } from './course-list.component';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppPipeModule,
        StarModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }

        ])
    ]

})
export class CourseModule {

}