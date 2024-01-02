import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie, MovieForUser, User, cBasedMovie } from './model';
import { MOVIES_WITH_ALGO1, USERS } from './mock-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({ providedIn: 'root' })
export class RecommendService {
    public currentUserId?: number;
    constructor(private httpClient: HttpClient) { }

    public getUsers(): Observable<User[]> {
        return of(USERS);
    }

    public getMovies(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>('/api');
    }

    public getRecommendMovies(movieId: string): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>('/api/recommended-movies/' + movieId).pipe(
            map(x => x.map((y) => ({
                ...y,
                genres: y.all_genres?.join(', '),
                // image: MOVIES_WITH_ALGO1[Math.floor(Math.random()*MOVIES_WITH_ALGO1.length)].image,
            }))
        ));
    }

    public getCBasedMovies(): Observable<cBasedMovie[]> {
        return this.httpClient.get<cBasedMovie[]>('/api/contenbased');
    }

    public getKnnUserMovies(userid: string): Observable<MovieForUser[]> {
        return this.httpClient.get<MovieForUser[]>('/api/KNN-User/' + userid);
    }

    public getKnnItemMovies(userid: string): Observable<MovieForUser[]> {
        return this.httpClient.get<MovieForUser[]>('/api/KNN-item/' + userid);
    }

    public getMatrixUserMovies(userid: string): Observable<MovieForUser[]> {
        return this.httpClient.get<MovieForUser[]>('/api/matrix-User/' + userid);
    }

    public getMatrixItemMovies(userid: string): Observable<MovieForUser[]> {
        return this.httpClient.get<MovieForUser[]>('/api/matrix-item/' + userid);
    }

    public getNeuMFMovies(): Observable<cBasedMovie[]> {
        return this.httpClient.get<cBasedMovie[]>('/api/neuMF');
    }

    public getAutoRecMovies(): Observable<cBasedMovie[]> {
        return this.httpClient.get<cBasedMovie[]>('/api/autoRec');
    }
}