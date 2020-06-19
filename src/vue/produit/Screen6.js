//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
// import all basic components
import ImagePicker from 'react-native-image-picker';
export default class Screen4 extends Component {


  constructor(props) {
      super(props);
      this.state = {
        resourcePath: {},
      };
    }

    selectFile = () => {
      var options = {
        title: 'Select Image',

        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

      ImagePicker.showImagePicker(options, res => {
        console.log('Response = ', res);

        if (res.didCancel) {
          console.log('User cancelled image picker');
        } else if (res.error) {
          console.log('ImagePicker Error: ', res.error);
        } else {
          let source = res;
          this.setState({
            resourcePath: source,
          });
        }
      });
    };


  render() {
    const image =     <View style={styles.container}>
                        <TouchableOpacity onPress={this.selectFile}>
                          <Image
                            source={{ uri: this.state.resourcePath.uri }}
                            style={{ width: 35, height: 35 }}
                          />
                        </TouchableOpacity>
                          <Text style={{ alignItems: 'center' }}>
                            {this.state.resourcePath.uri}
                          </Text>
                      </View>;

    const select =     <View style={styles.container}>

                          <TouchableOpacity onPress={this.selectFile}  >
                          <Image
                            source={require('./pages_images/image.png')}
                            style={{height: 85,width: 90 ,marginRight: 15}}
                          />
                          </TouchableOpacity>

                        </View>;

    return (
      <View style={styles.container}>
        {this.state.resourcePath.uri ? image : select}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  }
});
