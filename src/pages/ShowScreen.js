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
  Toast,
  List
} from 'native-base';
import { View, Image} from 'react-native';
import { getAllShows } from '../actions/shows';
import ShowItem from '../components/ShowItem';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import StarRating from 'react-native-star-rating';





class ShowScreen extends Component {
  static navigationOptions  = {
    title: 'CREATE NEW GAME',
    headerTitle: this.props ? this.state.title : "show screen",
    headerStyle: {
      backgroundColor: '#364051'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
  };


  constructor(props) {
    super(props);
    this.state = {
   title: this.props.navigation.getParam('title', 'gfg'),

    };
    console.log(this.props);
    console.log(this.state.title);

  }
 


  render() {
    const show= this.props.navigation.getParam('show', 'gfg');

    return (
        
  <Container style={{alignItems: 'center'}}>
  <KeyboardAwareScrollView>
  <Item style={{alignItems: 'center',flexDirection:'column', borderWidth:2, borderColor: "black",}}>
    <Card style={styles.card}>
    <Image
    style={styles.image}
    resizeMode="cover"
    source={{ uri:  show.image === null ? "dfdgd":show.image.medium }}/>
    </Card>
    <Card style={styles.titleCard}>
    <Text style={{fontWeight:'bold',fontSize:22}}>Rating:{show.rating.average} </Text>
    <StarRating
  disabled={false}
  maxStars={10}
  starSize={20}
  rating={show.rating.average}
/>
  </Card>

  <Card style={styles.titleCardSummery}>
  <Text style={{fontWeight:'bold',fontSize:10}}>Summery:{show.summary} </Text>
  <Text style={{fontWeight:'bold',fontSize:10}}>Genres:{show.genres[0]},{show.genres[1]} </Text>
  <Text style={{fontWeight:'bold',fontSize:10}}>Schedule: </Text>
  <Text style={{fontWeight:'bold',fontSize:10}}>Network:{show.network.name} </Text>
  <Text style={{fontWeight:'bold',fontSize:10}}>Language:{show.language} </Text>
</Card>
</Item>

</KeyboardAwareScrollView>
<Item style={styles.fixedFooter}>
<Text style={{fontWeight:'bold',fontSize:20,color:'white'}}> Nir Hezroni</Text>
</Item>
</Container>
    
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
    width: 400,
    alignItems: 'center',
    top:0
  },

  titleCard: {
    display:'flex',
    flexDirection: 'column',
    height: 50,
    width: 300,
    alignItems: 'center'
  },

  titleCardSummery: {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 200,
    width: 400,
    
  },

  image: {
    display:'flex',
    flexDirection: 'column',
    height: 300,
    width: 400,
    alignItems: 'center'
  },

  fixedFooter: {
    backgroundColor: '#364051',
    justifyContent: 'center', 
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    width:500,
    
  },


  Line: {
    width: 1,
    height: 185,
    borderStyle: 'solid',
    borderColor: '#979797',
    borderWidth: 1,
  }

};




export default ShowScreen;


// <Button full style={styles.button} onPress={() => { this.openModal() }} >
// <Text>GAMES HISTORY</Text>
// </Button>

// {allShows.map((show) => { return <ShowItem key={show.id} {...show} />; })}