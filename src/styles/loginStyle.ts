import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingVertical: 16,
		paddingHorizontal: 22,
		backgroundColor: 'white',
	},
	logoContainer: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	mascotContainer: {
		flex: 2,
		justifyContent: 'flex-end',
	},
	middleContainer: {
		flex: 5,
	},
	textContainer: {
		flex: 0.5,
		justifyContent: 'center',
	},
	bottomContainer: {
		flex: 0.5,
		justifyContent: 'flex-end',
	},
	title: {
		marginBottom: 4,
		fontSize: 36,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	subtitle: {
		margin: 2,
		fontSize: 16,
		textAlign: 'center',
	},
	input: {
		marginBottom: 16,
	},
	button: {
		marginTop: 16,
		backgroundColor: theme.colors.accent,
	},
	buttonLabel: {
		color: theme.colors.text,
		fontWeight: 'bold',
	},
	logo: {
		width: 1000.49 / 6,
		height: 263.51 / 6,
		alignSelf: 'center',
	},
	mascote: {
		width: 120,
		height: 120,
		alignSelf: 'center',
	},
	link: {
		marginTop: 12,
		textAlign: 'center',
		textDecorationLine: 'underline',
		fontSize: 12,
	},
	forgotPw: {
		alignSelf: 'flex-start',
		textAlign: 'center',
		textDecorationLine: 'underline',
		fontSize: 15,
	},
});

export default styles;
