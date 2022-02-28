import React from 'react';
// import logo from './logo.svg';
import FormCreate from './Form';
import './App.css';

function App({ form }) {
  // const [value, setValue] = useState('')
  // console.log('value:', value)
  return (
    <div className="App">
      {/* <input value={value} onInput={e => setValue(e.target.value)} /> */}
      <input 
        {...form.getFieldProps('input1', {
          validator: [
            {
              require: true,
              message: '必填1'
            },
            {
              min: 2,
              max: 20,
              message: '必须为 2 - 20 长度'
            }
          ]
        })} 

      />
      <div {...form.getFieldsError('input1')}></div>


      <input {...form.getFieldProps('input2', {
        validator: [
          {
            require: true,
            message: '选填2'
          },
        ],
        disabled(data){
          return data.input1 === '123';
        }
      })} />
      <div {...form.getFieldsError('input2')}></div>


      <button
        onClick={(e) => {
          console.log(form.getfieldsValue());
        }}
      >
        提交
      </button>
    </div>
  );
}

export default FormCreate()(App);
