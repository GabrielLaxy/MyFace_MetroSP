import { MD3LightTheme } from 'react-native-paper';

const theme = {
    ...MD3LightTheme,
    roundness: 7,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#6C6C6C', //cinza claro
      accent: '#001789', //azul
      background: '#F9F9F9', //branco
      text:'#FFFFFF',
    },
};

export default theme;
