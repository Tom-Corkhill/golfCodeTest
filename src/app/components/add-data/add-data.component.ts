import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { io } from "socket.io-client";

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  @Output() addData: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    const socket = io("https://mst-full-stack-dev-test.herokuapp.com/");

    socket.on('data-update', (data) => {
      
      const newData = {
        id: data.MSTID,
        match: data.Match,
        first: data.First,
        // last: data.Last,
        // nationality: data.Nationality,
        // Amature: data.Amature,
        // CalculatedRankInteger: data.CalculatedRankInteger,
        // Eastern: data.Eastern,
        // Handicap: data.Handicap,
        // Hole1STP: data.Hole1STP,
        // Hole1Strokes: data.Hole1Strokes,
        // Hole2STP: data.Hole2STP,
        // Hole2Strokes: data.Hole2Strokes,
        // Hole3STP: data.Hole3STP,
        // Hole3Strokes: data.Hole3Strokes,
        // Hole4STP: data.Hole4STP,
        // Hole4Strokes: data.Hole4Strokes,
        // Hole5STP: data.Hole5STP,
        // Hole5Strokes: data.Hole5Strokes,
        // Hole6STP: data.Hole6STP,
        // Hole6Strokes: data.Hole6Strokes,
        // Hole7STP: data.Hole7STP,
        // Hole7Strokes: data.Hole7Strokes,
        // Hole8STP: data.Hole8STP,
        // Hole8Strokes: data.Hole8Strokes,
        // Hole9STP: data.Hole9STP,
        // Hole9Strokes: data.Hole9Strokes,
        // Hole10STP: data.Hole10STP,
        // Hole10Strokes: data.Hole10Strokes,
        // Hole11Stp: data.Hole11STP,
        // Hole11Strokes: data.Hole11Strokes,
        // Hole12STP: data.Hole12STP,
        // Hole12Strokes: data.Hole12Strokes,
        // Hole13STP: data.Hole13STP,
        // Hole13Strokes: data.Hole13Strokes,
        // Hole14STP: data.Hole14STP,
        // Hole14Strokes: data.Hole14Strokes,
        // Hole15STP: data.Hole15STP,
        // Hole15Strokes: data.Hole15Strokes,
        // Hole16STP: data.Hole16STP,
        // Hole16Strokes: data.Hole16Strokes,
        // Hole17STP: data.Hole17STP,
        // Hole17Strokes: data.Hole17Strokes,
        // Hole18STP: data.Hole18STP,
        // Hole18Strokes: data.Hole18Strokes,
        // InSTP: data.InSTP,
        // InStrokes: data.InStrokes,
        // OutSTP: data.OutSTP,
        // OutStrokes: data.OutStrokes,
        // SOD: data.SOD,
        // Score: data.Score,
        // Sex: data.Sex,
        // SortPriority: data.SortPriority,
        // TVName: data.TVName,
        // Today: data.Today,
        // TotalSTP: data.TotalSTP,
        // TotalStrokes: data.TotalStrokes,
        // UniquePosition: data.UniquePosition,
        // course: data.course,
        // holesPlayed: data.holesPlayed,
        // isTeam: data.isTeam,
        // lastUpdated: data.lastUpdated,
        // leaderboardID: data.leaderboardID,
        // matchID: data.matchID,
        // orderInMatch: data.orderInMatch,
        // position: data.position,
        // round: data.round,
        // status: data.status,
        // teeStart: data.teeStart,
        // teeTime: data.teeTime,
        // tournamentID: data.tournamentID
      }
      this.addData.emit(newData);
    });


  }
}
