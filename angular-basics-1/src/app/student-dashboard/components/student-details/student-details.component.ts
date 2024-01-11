import { EventEmitter, Input, NgModule, OnChanges, OnInit, Output } from "@angular/core";
import { Component } from "@angular/core";
import { Students } from "../../../models/student-dashboard.interface";

@Component({
    selector: 'student-details',
    styleUrls: ['student-details.component.scss'],
    template: `    
    <div>
    <!-- <input type="text" [value]="details.name"> -->
    <span 
              class = "enroll-status" 
              [ngStyle]="{ 
                backgroundColor: details.isEnrolled ? '#008000' : '#ff0000'}"
            ></span>
                  <div *ngIf="editing">
                    <input type="text" [value] = "details.name" (input)="onNameChange(name.value)" #name>
                  </div>
                  <div *ngIf="!editing">
                    {{ details.name }}
                  </div>
                  <!-- toggleEdit<button (remove)="removeOperation($event)">Edit</button> -->
                  <!-- <button>Done</button> -->
                  <div>
                    Birth Date Details  : {{ details.isEnrolled ? (details.enrollDate | date: 'MMM d, y' ): 'Birth Certificate not found' }}
                  </div>
                  <div>
                    Guardian Count  : {{ details.guardian?.length || 0 }}
                  </div>
                  <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit'}}</button>
                  <button (click)="onRemove()">Remove</button>
              <br>
    </div>`
})
export class StudentDetails implements OnInit, OnChanges {
    @Input() details!: Students;
    @Output() remove: EventEmitter<any> = new EventEmitter();
    @Output() edit: EventEmitter<any> = new EventEmitter();


    editing: boolean = false;

    constructor(){
        console.log('Student Details constructor component');
    }

    ngOnInit(){
        console.log('Student Details ngOnInit Component');
    }

    ngOnChanges(changes: any){
      console.log(changes);
      if(changes.details){
        this.details = Object.assign({}, changes.details.currentValue);
      }
      console.log('Student Details ngOnChanges');
    }

    removeOperation(event: any){
      console.log(event);
    }

    onNameChange(value: string){
      this.details.name = value;
      console.log(value);
    }
    toggleEdit(){
      if(this.editing){
        this.edit.emit(this.details);
      }
      this.editing = !this.editing;
    }

    onRemove(){
      this.remove.emit(this.details);
    }
}