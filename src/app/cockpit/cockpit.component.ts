import { Component, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";


@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

    @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
    @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

    //serverName = '';
    //serverContent = '';

    @ViewChild('serverInputContent') serverInputContent:ElementRef;

    addServer(inputName:HTMLInputElement) {
        this.serverCreated.emit({
            serverName:inputName.value,
            serverContent:this.serverInputContent.nativeElement.value
        });
    }

    addBlueprintServer(inputName:HTMLInputElement) {
        this.blueprintCreated.emit({
            serverName:inputName.value,
            serverContent:this.serverInputContent.nativeElement.value
        });
    }
}