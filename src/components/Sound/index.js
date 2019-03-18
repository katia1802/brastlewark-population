import Sound from 'react-native-sound';

const sound = new Sound('http://sounds.com/some-sound', null, (error) => {
  if (error) {
    // do something
  }
  
  // play when loaded
  sound.play();
});
