import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Item, Text, Input, Header, Icon, Button } from 'native-base';
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
      searchTitle: '',

    };
  }
  componentDidMount = async () => {
    await this.props.getAllShows('girls');
  }

  handleButtonClick = async (searchTitle) => {
    await this.props.getAllShows(searchTitle);
  }


  render() {
    const { shows } = this.props;

    return (
      <Container style={{ alignItems: 'center' }}>
        <Header style={styles.searchBar} searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              onChangeText={(searchTitle) => this.setState({ searchTitle })} />
          </Item>
          <Button transparent onPress={() => {
            this.handleButtonClick(this.state.searchTitle);
          }}>
            <Text>Search</Text>
          </Button>
        </Header>
        <KeyboardAwareScrollView>
          <Content>
            <Item style={{ flexDirection: 'column' }}>

              {shows.map((show) => { return <ShowItem key={show.show.id} {...show} />; })}

            </Item>
          </Content>
        </KeyboardAwareScrollView>
        <Item style={styles.fixedFooter}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}> Nir Hezroni</Text>
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

  },
  searchBar: {

    justifyContent: 'center',
    alignItems: 'center',

    left: 0,
    right: 0,
    height: 50,
    width: 380,

  }

};

const mapDispatchToProps = (dispatch) => ({
  getAllShows: (search) => dispatch(getAllShows(search)),
});

const mapStateToProps = (state) => ({
  shows: state.shows
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
