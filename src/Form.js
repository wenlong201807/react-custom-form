import React from 'react';
import AsyncValidator from 'async-validator'
function Formcreate() {
  const store = {};
  return function(WrappedComponent) {
     return class Form extends React.Component {

      getFieldProps = (fieldKey, options = {}) => {
        return {
          key: fieldKey,
          // disabled: true, // 禁用输入框
          disabled: options.disabled ? options.disabled(this.getfieldsValue()) : undefined,
          onInput: e => {
            const value = e.target.value;

            store[fieldKey] = store[fieldKey] || {};
            store[fieldKey].value = value;

            if (options.validator) {
              const validator = new AsyncValidator({ [fieldKey]: options.validator })
              validator.validate({[fieldKey]: value})
              .then(() => {
                store[fieldKey].error = null;
              })
              .catch(({errors}) => {
                store[fieldKey].error = errors.map(error => error.message).join(',');
              })
              .then(() => {
                this.forceUpdate()
              })
            }
          
          }
        }
      }

      getfieldsValue = () => {
        return Object.keys(store).reduce((memo, current) => {
          return {
            ...memo,
            [current]: store[current].value,
          }
        }, {});
      }

      getFieldsError = (fieldKey) => {
        const error = store[fieldKey] && store[fieldKey].error;
        return {
          children: error,
        }
      }

      render() {
        const form = {
          getFieldProps: this.getFieldProps,
          getfieldsValue: this.getfieldsValue,
          getFieldsError: this.getFieldsError,
        };
        return <WrappedComponent form={form} />;
      }
    }
  }
}



export default Formcreate;










