import { useRouter } from "next/router";
import Card from '../ui/Card';
import { Button, Row } from 'react-bootstrap';


function ProductItem(props) {
  const route = useRouter();                  //use to update new route (push or replace -> back & history))

  function showDetailsHandler() {
    route.push('/' + props.id)                //router.push(url, as, options)   ,props.id as identifier
  }

  const { name, barcode, price, brand, category  } = props

  return (
    <tr >
      <td>{name}</td>
      <td>{barcode}</td>
      <td>{price}</td>
      <td>{brand}</td>
      <td>{category}</td>
      <td className='centered'>
        <Button variant="outline-primary" size="sm" onClick={showDetailsHandler}>➕</Button>{' '}
      </td>
    </tr>
  );
}

export default ProductItem;