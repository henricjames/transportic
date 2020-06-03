import { Component, OnInit,Input,ChangeDetectionStrategy} from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../abstractclass';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
  providers: [
    MakeProvider(TextfieldComponent)
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextfieldComponent extends AbstractValueAccessor implements OnInit {
  
  @Input() labelname: string;
  @Input() type: string="text";

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }
  onInput(inputValue){
    this.writeValue(inputValue);
  }

}
