import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Message } from '../models/message.model';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService extends BaseService {

  constructor(
    public http: Http,
    public af: AngularFire
  ) {
    super();
  }

  create(message: Message, listMessages: FirebaseListObservable<Message[]>): firebase.Promise<void>{
    return listMessages.push(message).catch(this.handlePromiseError);
  }

  getMessages(userId1: string, userId2: string): FirebaseListObservable<Message[]>{
    return <FirebaseListObservable<Message[]>>this.af.database.list(`/messages/${userId1}-${userId2}`, {
      query: {
        orderByChild: 'timestamp',
        limitToLast: 30
      }
    }).catch(this.handleObservableError);
  }

}
