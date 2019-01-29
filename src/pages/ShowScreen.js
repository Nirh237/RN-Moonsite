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





class ShowScreen extends Component {
  static navigationOptions = {
    title: 'CREATE NEW GAME',
    headerTitle: "Show Title",
    headerStyle: {
      backgroundColor: '#364051'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  constructor(props) {
    super(props);
    this.state = {
   

    };
  }
  componentDidMount = async () => {

    await this.props.getAllShows();
  }



  render() {
 
  
 



    return (
        
  <Container style={{alignItems: 'center'}}>
  <Item style={{alignItems: 'center',flexDirection:'column', borderWidth:2, borderColor: "black",}}>
    <Card style={styles.card}>
    <Image
    style={styles.image}
    resizeMode="cover"
    source={{ uri: "dfdgd" }}/>
    </Card>
    <Card style={styles.titleCard}>
    <Text style={{fontWeight:'bold',fontSize:22}}>title </Text>
  </Card>

  <Card style={styles.titleCard}>
  <Text style={{fontWeight:'bold',fontSize:22}}>Rating: </Text>
</Card>
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


const mapDispatchToProps = (dispatch) => ({
  getAllShows: () => dispatch(getAllShows()),
});

const mapStateToProps = (state) => ({
  shows: state.shows
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowScreen);


// <Button full style={styles.button} onPress={() => { this.openModal() }} >
// <Text>GAMES HISTORY</Text>
// </Button>

// {allShows.map((show) => { return <ShowItem key={show.id} {...show} />; })}