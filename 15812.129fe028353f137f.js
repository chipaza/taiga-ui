(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[15812],{15812:n=>{n.exports='<tui-input-slider\n    tuiTextfieldSize="m"\n    class="slider"\n    [max]="length - 1"\n    [quantum]="1"\n    [tuiTextfieldCustomContent]="inputCustomContent"\n    [tuiTextfieldLabelOutside]="true"\n    [(ngModel)]="index"\n></tui-input-slider>\n\n<ng-template #inputCustomContent>index</ng-template>\n\n<tui-pagination\n    [index]="index"\n    [length]="length"\n    (indexChange)="goToPage($event)"\n></tui-pagination>\n'}}]);