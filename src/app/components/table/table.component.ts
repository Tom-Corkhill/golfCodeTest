import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, fromEventPattern } from 'rxjs';
import { map } from 'rxjs/operators';

import { Datas } from '../../models/Datas';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  addData(data: Datas):void {
    console.log(data);
    this.golfers$.next(this.golfers$.getValue().concat([data]));
  }

  golfers$ = new BehaviorSubject<any[]>([
    
  ]);

  displayedColumns$ = new BehaviorSubject<string[]>([
    'id',
    'match',
    'first',
    'last',
    'nationality',
    'Amature',
    'CalculatedRankInteger',
    'Eastern',
    'Handicap',
    'Hole1STP',
    'Hole1Strokes',
    'Hole2STP',
    'Hole2Strokes',
    'Hole3STP',
    'Hole3Strokes',
    'Hole4STP',
    'Hole4Strokes',
    'Hole5STP',
    'Hole5Strokes',
    'Hole6STP',
    'Hole6Strokes',
    'Hole7STP',
    'Hole7Strokes',
    'Hole8STP',
    'Hole8Strokes',
    'Hole9STP',
    'Hole9Strokes',
    'Hole10STP',
    'Hole10Strokes',
    'Hole11STP',
    'Hole11Strokes',
    'Hole12STP',
    'Hole12Strokes',
    'Hole13STP',
    'Hole13Strokes',
    'Hole14STP',
    'Hole14Strokes',
    'Hole15STP',
    'Hole15Strokes',
    'Hole16STP',
    'Hole16Strokes',
    'Hole17STP',
    'Hole17Strokes',
    'Hole18STP',
    'Hole18Strokes',
    'InSTP',
    'InStrokes',
    'OutSTP',
    'OutStrokes',
    'SOD',
    'Score',
    'Sex',
    'SortPriority',
    'TVName',
    'Today',
    'TotalSTP',
    'TotalStrokes',
    'UniquePosition',
    'course',
    'holesPlayed',
    'isTeam',
    'lastUpdated',
    'leaderboardID',
    'matchID',
    'orderInMatch',
    'position',
    'round',
    'status',
    'teeStart',
    'teeTime',
    'tournamentID',
  ]);

  dataSource$: Observable<any[]>;


  constructor() { }

  ngOnInit(): void {
    this.dataSource$ = this.golfers$.pipe(map(v => Object.values(v)));
    }
  }