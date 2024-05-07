import react from 'react';
import { FixedSizeList as List } from 'react-window';

const MyList = ({ items })=> (
  <List 
    height={500}
    itemCount={items.length}
    itemSize={35}
    width={300}>
      {({ index, style }) => (
        <div style={style}>
          {items [index].name}
        </div>
      )}
  </List>
);

export default MyList;

