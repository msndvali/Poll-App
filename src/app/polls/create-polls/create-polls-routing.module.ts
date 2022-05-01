import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreatePollsComponent } from "./create-polls.component";

const createPollsRoutes: Routes = [
  { path: "", component: CreatePollsComponent },
]

@NgModule({
    imports: [RouterModule.forChild(createPollsRoutes)],
    exports: [RouterModule]
})
export class CreatePollsRoutingModule {}
