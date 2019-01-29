import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text,
  center,
  Body,
  StyleSheet,
  Card,
  Toast
} from 'native-base';
import { View,Image,TouchableOpacity } from 'react-native';
import {getAllShows} from '../actions/shows';
import { withNavigation } from 'react-navigation';





class ShowItem extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
  
   

    };
  }
 
  _onPressButton = () =>{
    this.props.navigation.navigate('ShowScreen');
  }



  render() {

    const { show } = this.props;
   
    console.log(show.image);
 



    return (

  <Item style={{alignItems: 'center',flexDirection:'column', borderWidth:2, borderColor: "black",}}>
    <Card style={styles.card}>
    <TouchableOpacity onPress={this._onPressButton}>
    <Image
    style={styles.image}
    resizeMode="cover"
    source={{ uri: show.image === null ? "dfdgd":show.image.medium }}/>
    </TouchableOpacity>
    </Card>

    <Card style={styles.titleCard}>
    <Text style={{fontWeight:'bold',fontSize:22}}>{show.name} </Text>
  </Card>

  <Card style={styles.titleCard}>
  <Text style={{fontWeight:'bold',fontSize:22}}>Rating: {show.rating.average}</Text>
</Card>
</Item>

    
    );
  }
}

const styles = {
  button: {
    borderWidth: 1,
    height: 100,
    borderColor: "black",
    borderTopWidth: 0,

  },

  card: {
    display:'flex',
    flexDirection: 'column',
    height: 300,
    width: 300,
    alignItems: 'center'
  },

  titleCard: {
    display:'flex',
    flexDirection: 'column',
    height: 50,
    width: 300,
    alignItems: 'center'
  },

  image: {
    display:'flex',
    flexDirection: 'column',
    height: 300,
    width: 300,
    alignItems: 'center'
  },

  Line: {
    width: 1,
    height: 185,
    borderStyle: 'solid',
    borderColor: '#979797',
    borderWidth: 1,
  }

};

export default withNavigation(ShowItem);


// <Button full style={styles.button} onPress={() => { this.openModal() }} >
// <Text>GAMES HISTORY</Text>
// </Button>








