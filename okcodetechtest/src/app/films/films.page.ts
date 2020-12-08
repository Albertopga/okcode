import { Component, OnInit } from "@angular/core";
import { FilmService } from "../services/film.service";
import { Film } from "./film.model";

@Component({
  selector: "app-films",
  templateUrl: "./films.page.html",
  styleUrls: ["./films.page.scss"],
})
export class FilmsPage implements OnInit {
  private filmsSearch: Film | null;

  constructor(private filmsService: FilmService) {
    this.filmsSearch = null;
  }

  ngOnInit() {}

  async search(event: any) {
    let title = event.detail.value.trim();
    title = title.replace(" ", "+");
    this.filmsSearch = await this.filmsService.getFilmeByTitle(title);
  }
}
