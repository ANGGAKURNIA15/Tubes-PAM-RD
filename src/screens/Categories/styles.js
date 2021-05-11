import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 20,
    height: 180,
    width: 200,
    marginTop: 0,
    marginLeft: 0,
    marginBottom: 0,
    margin: 15,
    backgroundColor: 'white',
  },
  categoriesItemIndikator:{
    height: 180,
    width: 200,
    marginTop: 30,
    marginLeft: 15,
    borderWidth: 0.5,
    borderRadius: 20,
    margin: 15,
  },
  categoriesPhoto: {
    width: '100%',
    height: 120,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  categoriesName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5
  },
  
});

export default styles;
