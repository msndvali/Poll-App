import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const layoutRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    pathMatch: 'prefix',
    children:
    [
      {
        path: '',
        redirectTo : 'polls',
        pathMatch : 'full'
      },
      {
        path : 'polls',
        loadChildren: () =>
          import("../polls/polls.module").then(m => m.PollsModule)
      },
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(layoutRoutes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
