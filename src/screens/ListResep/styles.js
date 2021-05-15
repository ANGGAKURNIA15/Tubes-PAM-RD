import { StyleSheet } from 'react-native';
import { Resepmasakan } from '../../AppStyles';

const styles = StyleSheet.create({
  container: Resepmasakan.container,
  photo: Resepmasakan.photo,
  title: Resepmasakan.title,
  category: Resepmasakan.category,
  indikator: {
    marginLeft: 30,
    marginTop: 15,
    marginRight: 30,
    width: 420,
    height: 150,
    borderWidth: 0.5,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    flexDirection: "row",
  },
});

export default styles;
