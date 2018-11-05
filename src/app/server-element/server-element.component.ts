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
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild
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
    @ViewChild('heading') header:ElementRef;
    @ContentChild('contentParagraph') paragraph:ElementRef;


    ngOnInit() {
        console.log('ngInit called!');
        console.log('Text Content'+this.header.nativeElement.textContent);
        console.log('Content Paragraph :'+ this.paragraph.nativeElement.textContent);
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
        console.log('Content Paragraph :'+ this.paragraph.nativeElement.textContent);
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentChecked called!');
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit called!');
        console.log('Text Content : '+this.header.nativeElement.textContent);
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