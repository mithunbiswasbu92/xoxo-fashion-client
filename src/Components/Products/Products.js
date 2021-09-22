import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Products = ({pd}) => { 
    return (
        <div style={{float: "left", margin: "10px", padding: "10px"}}>
             <Card sx={{ maxWidth: 245 }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={pd.imageURL}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{pd.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{pd.description}</Typography>
                </CardContent>
                <CardActions>
                    <h3>${pd.price}</h3>
                    <Button style={{marginLeft: "80px"}} variant="contained">
                    <Link to={`/checkout/${pd.id}`}>Buy Now</Link>
                    </Button>                
                </CardActions>
            </Card>
        </div>
    );
};

export default Products;