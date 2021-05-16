import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  carouselContainer: {
    minHeight: 250
  },
  carousel: {},

  image: {
    width: '100%',
    height: 250
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 250
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 200
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginTop: -55,
    marginLeft: 340
  },
  infoRecipe: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginTop: -55,
    marginLeft: -110,
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#2cd18a'
  },
  DescriptionJudul:{
    marginLeft: 0,
    fontSize: 18,
    marginTop: 30,
    fontWeight: 'bold',
  },
  infoDescriptionRecipe: {
    textAlign: 'left',
    fontSize: 16,
    marginTop: 10,
  },
  infoRecipeName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  }
});

export default styles;
