import { 
    Component,
    Input, 
    ViewEncapsulation, 
    OnInit, 
    OnChanges, 
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from "@angular/core";

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
    @Input('srvElement') element: { type: string, serverName: string, serverContent: string };
    @Input() serverName : string;


    ngOnInit() {
        console.log('ngInit called!');
    }

    ngOnChanges(changes:SimpleChanges){
        console.log('ngOnChanges called!');
        console.log(changes);
    }

    ngDoCheck(){
        console.log('ngDoCheck called');
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit called!');
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentChecked called!');
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit called!');
    }

    ngAfterViewChecked(){
        console.log('ngAfterViewChecked called!');
    }

    ngOnDestroy(){
        console.log('ngOnDestroy Called!');
    }

    constructor() {
        console.log('constructor called!');
    }
}