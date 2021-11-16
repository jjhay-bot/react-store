import Button from '@mui/material/Button';
import axios from 'axios';

function AddItem(props) {

  const addToCartHandler = async () => {
    const url = 'https://store-1064b-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
    const addedItem = { name: props.name, price: props.price, amount: +1 }
    console.log(props.identifier);

    axios.post(url, addedItem)
    .then(responceData => {
      // setUserIngredients(prev => [...prev, { id:responceData.name, ...newIngredient }])
      console.log('succesfully added');
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
  }
  
  return (
    <Button variant="contained" color="success" style={{backgroundColor:'#16caaf', }} onClick={addToCartHandler}>
      Add
    </Button>
  );
}

export default AddItem;
