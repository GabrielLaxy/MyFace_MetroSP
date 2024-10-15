import { StyleSheet } from "react-native";
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    padding: 16,
  },
  title: {
    marginBottom: 4,
    fontSize:30,
    textAlign: "center",
    fontWeight:'bold',
  },
  subtitle:{
    margin:2,
    fontSize:15,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 12,
    backgroundColor:theme.colors.accent,
  },
  buttonLabel:{
    color:theme.colors.text,
    fontWeight:'bold',
  },
  logo:{
    width:1000.49/5,
    height:263.51/5,
    alignSelf:'center',
  },
  mascote:{
    width:120,
    height:120,
    alignSelf:'center',
  }
});

export default styles;
