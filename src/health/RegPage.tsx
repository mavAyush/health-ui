import  { React,Component } from 'react';
import {HealthField} from './commons/HealthField';
import { InnerLayout } from './commons/layouts';




export default class RegPage extends Component {

  render() { 

    const fields = ['Name','Age','Gender'];
    const grid1=<HealthField  names={fields} gap={50} type={"H"} />;

    return (
      <InnerLayout  content ={grid1} el ={16} />
      
    )
  }
}
