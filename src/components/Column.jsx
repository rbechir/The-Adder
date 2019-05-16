import React from 'react';
import './Column.css'
import Box from './Box';
import AddLineButton from './AddLineButton';
import Separator from './Separator';
import Total from './Total';
import ColumnTitle from './ColumnTitle';
import BaseButton from './BaseButton';

const Column = ({col, onBaseClick, onAddBoxClick, onDelBoxClick, onDelColClick, onTitleChange, onSeparatorChange, onBoxChange}) => {
  return (
    <ul className='column'>
      <li>
        <ColumnTitle id={col.id} value={col.title} onChange={onTitleChange} />
      </li>
      <li className='sepAndBase'>
        <Separator id={col.id} value={col.separator} onChange={onSeparatorChange} />
        <BaseButton id={col.id} onClick={onBaseClick} value={`Base ${col.base} active`} />
      </li>
      <li>
        {Object.keys(col.boxes)
          .map((idBox, key) =>
            <Box
              key={key}
              id={col.id}
              separator={col.separator}
              box={col.boxes[idBox]}
              onClick={onDelBoxClick}
              onBoxChange={onBoxChange} />
          )}
      </li>
      <li>
        <AddLineButton id={col.id} onClick={onAddBoxClick} value='Add a Box' />
      </li>
      <li>
        <Total base={col.base} separator={col.separator} time={col.boxes} />
      </li>
      <li>
        <button className='deleteColumn'
          onClick={() => onDelColClick(col.id)}>
          <strong>Delete the column</strong>
        </button>
      </li>
    </ul>
  );
}

export default Column;