import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowServer :boolean = false;
  serverCreationStatus : string = 'No server was created!';
  serverName : string = '';
  createServer :boolean = false;
  servers = ['testserver','testserver2'];
  constructor() { 
    
    setTimeout(()=>{
      this.allowServer = true;
    },2000);

  }

  onCreateServer(){
    this.createServer = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
  }

  onUpdateServer(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  username : string = '';
  resetName(){
    this.username = '';
  }

  ngOnInit() {
  }

  toggleBtn = true;
  logs = [];
  i = 1;
  toggleBtnEvent(){
    this.logs.push(this.i);
    this.i++;
    this.toggleBtn = !this.toggleBtn;
  }

}
