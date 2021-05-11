import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  indikator: RecipeCard.indikator,
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  daftarmakanan:{
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 10,
    fontSize: 18,

  }
});

export default styles;
