import React from 'react';
import '../css/Column.css'
import Box from './Box';
import AddLineButton from './AddLineButton';
import Separator from './Separator';
import Total from './Total';
import ColumnTitle from './ColumnTitle';
import BaseButton from './BaseButton';

const Column = (props) => {
  return (
    <ul className='column'>
      <li>
        <ColumnTitle id={props.col.id} value={props.col.title} onChange={props.onTitleChange} />
      </li>
      <li className='sepAndBase'>
        <Separator id={props.col.id} value={props.col.separator} onChange={props.onSeparatorChange} />
        <BaseButton id={props.col.id} onClick={props.onBaseClick} value={`Base ${props.col.base} active`} />
      </li>
      <li>
        {Object.keys(props.col.boxes)
          .map((idBox, key) =>
            <Box
              key={key}
              id={props.col.id}
              separator={props.col.separator}
              box={props.col.boxes[idBox]}
              onClick={props.onDelBoxClick}
              onBoxChange={props.onBoxChange} />
          )}
      </li>
      <li>
        <AddLineButton id={props.col.id} onClick={props.onAddBoxClick} value='Add a Box' />
      </li>
      <li>
        <Total base={props.col.base} separator={props.col.separator} time={props.col.boxes} />
      </li>
      <li>
        <button className='deleteColumn'
          onClick={() => props.onDelColClick(props.col.id)}>
          <strong>Delete the column</strong>
        </button>
      </li>
    </ul>
  );
}

export default Column;