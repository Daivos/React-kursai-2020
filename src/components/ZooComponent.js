 import React, { Component } from 'react';
// import { Media, CardImg } from 'reactstrap';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
//import InfoIcon from '@material-ui/icons/Info';


class Zoo extends Component {

    constructor(props) {
        super();

        this.state = {
            selected : null,

                    
        } 

        classes: makeStyles((theme) => ({
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden',
              backgroundColor: theme.palette.background.paper,
            },
            gridList: {
              width: 500,
              height: 450,
            },
            icon: {
              color: 'rgba(255, 255, 255, 0.54)',
            },
          }))
    }



      

 

    slectedAnimal(animal) {
        console.log("veikia")
        console.log(animal)
        this.setState({selected : animal})
    }

    renderSelectedAnimal(animal) {
        if (animal == null) {
            return (
                <div>Nieko</div>
            );
        }
        else {
            return (
                <h1>{animal.title}</h1>
            );
        }
    }
    render() {
    
        return (

 <div className="col-12">
 <div className="col-9">
<GridList cellHeight={280} cols={4}>
  <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
    <ListSubheader component="div">Zoo animals</ListSubheader>
    {this.renderSelectedAnimal(this.state.selected)}
  </GridListTile>

  

  {this.props.animals.map((animal) => (
    <GridListTile key={animal.id}>
      <img src={animal.image} alt={animal.title} onClick={() => this.slectedAnimal(animal)} />
      <GridListTileBar
        title={animal.title}
        subtitle={<span>by: {animal.desc}</span>}
        // actionIcon={
        //   <IconButton aria-label={`info about ${animal.title}`} className={this.state.classes.icon}>
        //     <InfoIcon />
        //   </IconButton>
        // }
      />
    </GridListTile>
  )                  
  )}

  
</GridList>
</div>
<div className="col-9">

</div>
</div>
        )
    }
}


export default Zoo;

