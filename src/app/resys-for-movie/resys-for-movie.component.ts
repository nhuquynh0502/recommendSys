import { Component, OnInit } from '@angular/core';
import { User, Movie } from '../model';
import { MOVIES_WITH_ALGO1 } from '../mock-model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecommendService } from '../recommend.service';
import { LoremIpsum } from "lorem-ipsum";

@Component({
  selector: 'app-resys-for-movie',
  templateUrl: './resys-for-movie.component.html',
  styleUrls: ['./resys-for-movie.component.scss']
})
export class ResysForMovieComponent implements OnInit {
  movies: Movie[] = [];
  lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 6
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  sampleInfo = '';

  constructor(private route: ActivatedRoute, private recommendService: RecommendService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      const movieId = res.get('movieId')
      this.recommendService.getRecommendMovies(movieId ?? '').subscribe((res) => {
        this.movies = res;
        this.sampleInfo = this.lorem.generateParagraphs(1);
      })
    });
  }

  public back(): void {
    this.router.navigate(['/resysforuser', this.recommendService.currentUserId])
  }
}
