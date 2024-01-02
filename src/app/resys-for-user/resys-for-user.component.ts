import { Component, OnInit } from '@angular/core';
import { User, Movie, cBasedMovie, MovieForUser } from '../model';
import { MOVIES_WITH_ALGO1 } from '../mock-model';
import { RecommendService } from '../recommend.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { forkJoin, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-resys-for-user',
  templateUrl: './resys-for-user.component.html',
  styleUrls: ['./resys-for-user.component.scss']
})
export class ResysForUserComponent {
  movies: Movie[] = MOVIES_WITH_ALGO1;
  cbasedMovies: cBasedMovie[] = [];
  knnUsers: MovieForUser[] = [];
  knnItems: MovieForUser[] = [];
  matrixUsers: MovieForUser[] = [];
  matrixItems: MovieForUser[] = [];
  neuMF: cBasedMovie[] = [];
  autoRec: cBasedMovie[] = [];

  constructor(private recommendService: RecommendService, private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cbasedMovies = [];
      this.knnItems = [];
      this.knnUsers = [];
      this.matrixItems = [];
      this.matrixUsers = [];
      this.neuMF = [];
      this.autoRec = [];
      const userId = params.get('id');
      this.recommendService.currentUserId = Number(userId);
      this.spinner.show();

      forkJoin({
        cbasedMovies: this.recommendService.getCBasedMovies(),
        knnItems: this.recommendService.getKnnItemMovies(userId ?? ''),
        knnUsers: this.recommendService.getKnnUserMovies(userId ?? ''),
        matrixItems: this.recommendService.getMatrixItemMovies(userId ?? ''),
        matrixUsers: this.recommendService.getMatrixUserMovies(userId ?? ''),
        neuMF: this.recommendService.getNeuMFMovies(), 
        autoRec: this.recommendService.getAutoRecMovies()})
        .subscribe(({cbasedMovies, knnItems, knnUsers, matrixItems, matrixUsers, neuMF, autoRec}) => {
          debugger
          this.cbasedMovies = cbasedMovies.filter(x => x.user_id == Number(userId));
          this.knnItems = knnItems;
          this.knnUsers = knnUsers;
          this.matrixItems = matrixItems;
          this.matrixUsers = matrixUsers;
          this.neuMF = neuMF.filter(x => x.user_id == Number(userId));
          this.autoRec = autoRec.filter(x => x.user_id == Number(userId));
        }).add(() => {
          this.spinner.hide();
        })
    })
  }
}
