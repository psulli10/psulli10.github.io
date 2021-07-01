import Card from './Card';
import './List.css'

const List = ({ array, id }) => {
  const listNodes = array.map((object, index) => {
    return <li key={index}><Card cardInfo={object}/></li>;
  });

  return (
    <div className='list' id={id}>
      <ul>{listNodes}</ul>
    </div>
  );
};

export default List;
