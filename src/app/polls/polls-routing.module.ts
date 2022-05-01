import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PollsComponent } from "./polls.component";

const publicPollsRoutes: Routes = [
  {
    path: "",
    component: PollsComponent,
    pathMatch: 'prefix',
    children:
    [
      {
        path: '',
        redirectTo : 'public-polls',
        pathMatch : 'full'
      },
      {
        path : 'public-polls',
        loadChildren: () =>
          import("./public-polls/public-polls.module").then(m => m.PublicPollsModule)
      },
      {
        path : 'public-polls/poll-page',
        loadChildren: () =>
          import("./public-polls/poll-page/poll-page.module").then(m => m.PollPageModule)
      },
      {
        path : 'create-polls',
        loadChildren: () =>
          import("./create-polls/create-polls.module").then(m => m.CreatePollsModule)
      }
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(publicPollsRoutes)],
    exports: [RouterModule]
})
export class PollsRoutingModule {}
