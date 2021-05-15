import { StyleSheet} from 'react-native';


export const Resepmasakan = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: -10,
    marginTop: -10,
    marginRight: -10,
    width: 400,
    height: 150,
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    flexDirection: "row",
  },
  indikator: {
    marginLeft: 30,
    marginTop: 15,
    marginRight: 30,
    width: 420,
    height: 150,
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    flexDirection: "row",
  },
  photo: {
    marginTop: -10,
    marginLeft: -10,
    width: 180,
    height: 148,
    borderRadius: 15,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  title: {
    marginTop: 45,
    flex:3,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#444444',
  
  },
  category: {
    marginLeft: 10,
    marginTop: 50,
    marginRight: 20,
    
    
  }
});
