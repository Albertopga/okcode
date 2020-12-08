import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "films",
    loadChildren: () =>
      import("./films/films.module").then((m) => m.FilmsPageModule),
  },
  {
    path: "",
    redirectTo: "films",
    pathMatch: "full",
  },
  {
    path: "detail/:filmTitle",
    loadChildren: () =>
      import("./film-detail/film-detail.module").then(
        (m) => m.FilmDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
