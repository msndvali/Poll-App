import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { PollsModel } from "../models/poll.model";

@Injectable()
export class CreatePollsService {

  constructor(private http: HttpClient) {}

  createPolls(poll: PollsModel): Observable<PollsModel> {
    return this.http.post<PollsModel>(`${environment.ApiUrl}polls.json`,  poll);
  }
}
