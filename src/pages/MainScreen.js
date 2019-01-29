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
    title: 'CREATE NEW GAME',
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



  render() {
    const {shows} = this.props;

    return (
      <KeyboardAwareScrollView>
      <Container>
        <Content>
        <Item style={{flexDirection: 'column'}}>

        {shows.map((show) => { return <ShowItem key={show.show.id} {...show} />; })}
    
        </Item>
        </Content>
      </Container>
      </KeyboardAwareScrollView>

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