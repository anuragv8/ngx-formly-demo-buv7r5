import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';


export interface TabType {
  label: string;
  fields: FormlyFieldConfig[];
}


@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {

  tabs: TabType[] = [
    {
      label: 'Doctor',
      fields: [
        {
          className: 'section-label',
          template: '<h3 class="my-4">Some stuff</h3>',
        },
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'doctor.firstName',
              type: 'input',
              className: 'col-6',
              templateOptions: {
                label: 'First Name',
              },
            },
            {
              key: 'doctor.lastName',
              type: 'input',
              className: 'col-6',
              templateOptions: {
                label: 'Last Name',
              },
            },
          ],
        }, 
      ],
    },
    {
      label: 'Patient',
      fields: [
        { 
          key: 'investments',
          type: 'repeat',
          fieldArray: {
            fieldGroupClassName: 'row',
            templateOptions: {
              btnText: 'Add investment',
            },
          fieldGroup: [
            {
              key: 'patient.firstName',
              type: 'input',
              className: 'col-6',
              templateOptions: {
                label: 'First Name',
              },
            },
            {
              key: 'patient.lastName',
              type: 'input',
              className: 'col-6',
              templateOptions: {
                label: 'Last Name',
              },
            },
          ],
          }
        },
      ],
    },
  ];

  pTabs:TabType[] = [{
      label: 'Patient1',
      fields: [
        { 
          key: 'investments',
          type: 'repeat',
          fieldArray: {
            fieldGroupClassName: 'row',
            templateOptions: {
              btnText: 'Add investment',
            },
          fieldGroup: [
            {
              key: 'patient.firstName',
              type: 'input',
              className: 'col-6',
              templateOptions: {
                label: 'First Name',
              },
            },
            {
              key: 'patient.lastName',
              type: 'input',
              className: 'col-6',
              templateOptions: {
                label: 'Last Name',
              },
            },
          ],
          }
        },
      ],
    },{
      label: 'Patient2',
      fields: [
        { 
          key: 'investments2',
          type: 'repeat',
          fieldArray: {
            fieldGroupClassName: 'row',
            templateOptions: {
              btnText: 'Add investment',
            },
          fieldGroup: [
            {
              key: 'patient.firstName',
              type: 'input',
              className: 'col-6',
              templateOptions: {
                label: 'First Name',
              },
            },
            {
              key: 'patient.lastName',
              type: 'input',
              className: 'col-6',
              templateOptions: {
                label: 'Last Name',
              },
            },
          ],
          }
        },
      ],
    },]

  model = {};

  form: FormArray;
  options: FormlyFormOptions[];

  constructor() { }

  ngOnInit() {
    this.form = new FormArray(this.tabs.map(() => new FormGroup({})));
    this.options = this.tabs.map(() => <FormlyFormOptions>{});
  }

  submit() {
    alert(JSON.stringify(this.model));
  }

}