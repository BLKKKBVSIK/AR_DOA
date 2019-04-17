'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

import {
    ViroARScene,
    ViroText,
    ViroBox,
    ViroMaterials,
    Viro3DObject,
    ViroAmbientLight,
    ViroSpotLight,
    ViroAnimations,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {
    
    constructor() {
        super();
        
        // Set initial state here
        this.state = {
            text : "Initializing AR...",
            counter : 1,
        };
        
        // bind 'this' to functions
        this._onInitialized = this._onInitialized.bind(this);
        this._varSave = 0;
    }
    
    render() {
        return (
                <ViroARScene onTrackingInitialized={this._onInitialized} >
                    <ViroText text={this.state.text}
                    scale={[.2, .2, 0.2]}
                    position={[0, -.5, -2]}
                    style={styles.helloWorldTextStyle} />
                
                    <ViroAmbientLight color={"#aaaaaa"} />
                    <ViroSpotLight
                    innerAngle={5} outerAngle={90} direction={[0,-1,-.2]}
                    position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
                
                
                    <Viro3DObject source={require('./res/emoji_smile/esteban.obj')}
                    position={[0, -.5, -1]}
                    scale={[0.05, 0.05, 0.05]}
                    type="OBJ"
                    resources={[require('./res/emoji_smile/esteban.mtl')]}
                    animation={{name: "rotate", run: true, loop: true}}
                    onClick={() => {this._onClicked("1")}} />
                
                    <Viro3DObject source={require('./res/emoji_smile/rubiks.obj')}
                    position={[-.4, -.5, -1]}
                    scale={[0.05, 0.05, 0.05]}
                    type="OBJ"
                    resources={[require('./res/emoji_smile/rubiks.mtl')]}
                    animation={{name: "rotateall", run: true, loop: true}}
                    onClick={() => {this._onClicked("2")}} />
                
                    <Viro3DObject source={require('./res/emoji_smile/monkey.obj')}
                    position={[-.2, -.5, -1]}
                    scale={[0.05, 0.05, 0.05]}
                    type="OBJ"
                    resources={[require('./res/emoji_smile/monkey.mtl')]}
                    onClick={() => {this._onClicked("3")}} />
                </ViroARScene>
                );
    }
    _onInitialized() {
        this.setState({
                      text : "Amazing!!"
                      });
    }
    
    _onClicked(objectTag) {
        fetch("http://127.0.0.1/html/arproject/dbrequest.php?id="+objectTag)
        .then(response => {
              console.log(response);
              return response.json();
              })
        .then(responseJson => {
              this.setState({
                            text : responseJson.name,
                            counter : this.state.counter + 1
                            })
              })
    }
}

var styles = StyleSheet.create({
                               helloWorldTextStyle: {
                               fontFamily: 'Arial',
                               fontSize: 48,
                               color: '#ffffff',
                               textAlignVertical: 'center',
                               textAlign: 'center',
                               },
                               });

ViroMaterials.createMaterials({
                              grid: {
                              diffuseTexture: require('./res/grid_bg.jpg'),
                              },
                              gridde: {
                              diffuseTexture: require('./res/grid_bg2.jpg'),
                              },
                              });

ViroAnimations.registerAnimations({
                                  rotate: {
                                      properties: {
                                          rotateY: "+=90"
                                      },
                                      duration: 250, //.25 seconds
                                      },
                                  
                                  rotateall: {
                                          properties: {
                                            rotateY: "+=90",
                                            rotateX: "+=90"
                                      },
                                      duration: 500, //.5 seconds
                                  },
                                  });



module.exports = HelloWorldSceneAR;
