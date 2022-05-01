import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicPollsComponent } from "./public-polls.component";

const publicPollsRoutes: Routes = [
  { path: "", component: PublicPollsComponent },
]

@NgModule({
    imports: [RouterModule.forChild(publicPollsRoutes)],
    exports: [RouterModule]
})
export class PublicPollsRoutingModule {}
