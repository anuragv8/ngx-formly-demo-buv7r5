export const addressFormlyType = { 
  name: 'address',
  extends: 'formly-group',
  defaultOptions: {
    fieldGroup: [
      {
        key: 'street',
        type: 'input',
        className: 'col-sm-8',
        templateOptions: {
          label: 'Street',
        },
      },
      {
        key: 'number',
        type: 'input', 
        className: 'col-sm-4',
        templateOptions: {
          type: 'date',
          label: 'Number',
        },
      },
    ]
  }
};