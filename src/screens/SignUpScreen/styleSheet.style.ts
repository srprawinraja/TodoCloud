import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.CUSTOM_ORANGE,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  signinContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signinText: {
    color: '#444',
  },
  signinLink: {
    color: colors.CUSTOM_ORANGE,
    fontWeight: 'bold',
  },
});