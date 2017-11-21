import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Image} from '../model/character';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent {

    //@Output() click = new EventEmitter();

    @Input() image: Image;

}
