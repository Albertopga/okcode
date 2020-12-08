import { Injectable } from "@angular/core";
import { Film } from "../films/film.model";

@Injectable({
  providedIn: "root",
})
export class FilmService {
  apiUrl: string = "https://www.omdbapi.com/";
  apiKey: string = "60a3fde";

  constructor() {}

  async getFilmeByTitle(title: string): Promise<Film | null> {
    const fetchResponse = await fetch(
      `${this.apiUrl}?t=${title}&apikey=${this.apiKey}`
    );
    const data = await fetchResponse.json();
    return parseFilm(data);
  }
}

function parseFilm(data: any): Film | null {
  return {
    title: data.Title,
    year: data.Year,
    genre: data.Genre,
    director: data.Director,
    actors: data.Actors,
    plot: data.Plot,
    language: data.Language,
    poster: data.Poster,
  };
}
