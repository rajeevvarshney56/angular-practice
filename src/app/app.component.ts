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
}
