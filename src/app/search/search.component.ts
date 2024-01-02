import { Component, OnInit } from '@angular/core';
import { Movie } from '../model';
import { MOVIES_WITH_ALGO1 } from '../mock-model';
import { RecommendService } from '../recommend.service';
import { Router } from '@angular/router';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movies: Movie[] = MOVIES_WITH_ALGO1;

  selected?: Movie;
  moviesForSearch: Movie[] = [];
  constructor(private recommendService: RecommendService, private router: Router) { }

  ngOnInit(): void {
    this.recommendService.getMovies().subscribe((res) => {
      this.moviesForSearch = res;
    })
  }

  onSelect(event: TypeaheadMatch): void {
    this.router.navigate(['resysformovie',event.item.movie_id])
  }
}
