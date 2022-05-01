import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PollPageComponent } from "./poll-page.component";

const pollPageRoutes: Routes = [
  { path: "", component: PollPageComponent },
]

@NgModule({
    imports: [RouterModule.forChild(pollPageRoutes)],
    exports: [RouterModule]
})
export class PollPageRoutingModule {}
