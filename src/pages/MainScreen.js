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
import { View,TouchableOpacity } from 'react-native';
import { getAllShows } from '../actions/shows';
import ShowItem from '../components/ShowItem';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';







class MainScreen extends Component {
  static navigationOptions = {
    title: 'Main Screen',
    headerTitle: "Main Screen",
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

  onChange =()=>{

  }



  render() {
    const {shows} = this.props;

    return (
      <Container style={{alignItems: 'center'}}>
     
      <KeyboardAwareScrollView>
   
        <Content>
        <Item style={{flexDirection: 'column'}}>

        {shows.map((show) => { return <ShowItem key={show.show.id} {...show} />; })}
    
        </Item>
        </Content>
    
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
    display: 'flex',
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
  },

  fixedFooter: {
    backgroundColor: '#364051',
    justifyContent: 'center', 
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    width: 500, 
    
  }

};

const mapDispatchToProps = (dispatch) => ({
  getAllShows: () => dispatch(getAllShows()),
});

const mapStateToProps = (state) => ({
  shows: state.shows
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);


// <Button full style={styles.button} onPress={() => { this.openModal() }} >
// <Text>GAMES HISTORY</Text>
// </Button>

// {allShows.map((show) => { return <ShowItem key={show.id} {...show} />; })}