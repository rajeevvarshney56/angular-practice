import { Component } from "@angular/core";

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
    serverName = '';
    serverContent = '';

    addServer() {
        // this.serverElements.push({
        //     type: 'server',
        //     serverName: this.serverName,
        //     serverContent: this.serverContent
        // });
    }

    addBlueprintServer() {
        // this.serverElements.push({
        //     type: 'blueprint',
        //     serverName: this.serverName,
        //     serverContent: this.serverContent
        // });
    }
}