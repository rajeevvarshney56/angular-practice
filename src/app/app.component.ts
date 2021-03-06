import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', serverName: 'Testserver', serverContent: 'just a server!' }];

  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
        type: 'server',
        serverName: serverData.serverName,
        serverContent: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
        type: 'blueprint',
        serverName: blueprintData.serverName,
        serverContent: blueprintData.serverContent
    });
  }

  OnChangeFirst(){
    this.serverElements[0].serverName = 'Changed';
  }

  OnDestroyFirst(){
    this.serverElements.splice(0,1);
  }

  oddNumbers :number[] = [];
  evenNumbers :number[] = [];
  onIntervalFired(firedNumber:number){
    if(firedNumber%2 == 0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }


  listValues = [1,2,3,4,5];
  oddValues = [1,3,5];
  evenValues = [2,4];
  onlyOdd = false;
}
