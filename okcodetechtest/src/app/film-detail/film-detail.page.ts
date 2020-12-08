import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Film } from "../films/film.model";
import { FilmService } from "../services/film.service";

@Component({
  selector: "app-film-detail",
  templateUrl: "./film-detail.page.html",
  styleUrls: ["./film-detail.page.scss"],
})
export class FilmDetailPage implements OnInit {
  private filmSearch: Film;
  constructor(
    private _route: ActivatedRoute,
    private filmsService: FilmService
  ) {}

  ngOnInit() {
    this._route.params.subscribe(async (params) => {
      // TODO:validate params
      const { filmTitle } = params;
      this.filmSearch = await this.filmsService.getFilmeByTitle(filmTitle);
    });
  }
}
