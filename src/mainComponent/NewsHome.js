/* This file has been downloaded from rnexamples.com */
/* If You want to help us please go here https://www.rnexamples.com/help-us */
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const friends = [
  {
    id: '1',
    name: 'Fayzullayev.D',
    country: 'Tr1',
    age: '32 Yosh',
    rating: "Temir yo`l tizimidagi yangi islohatlar...",
    sports: ['TemirYo`l', 'Tr1', 'Hadavoy', 'Mator'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar1.png', 
  },
  {
    id: '2',
    name: 'Meliboyev.F',
    country: 'Tr1',
    age: '32 Yosh',
    rating: "Yengi elektronik tizimlar samarasi..",
    sports: ['TemirYo`l', 'Tr1', 'Hadavoy', 'Kompressor'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar1.png', 
  },
  {
    id: '3',
    name: 'Nuriddinov.K',
    country: '63-sex',
    age: '31 Yosh',
    rating: 3,
    sports: ['Universitite', '63-sex', 'Footboll', 'Maydon'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar1.png', 
  },
  {
    id: '4',
    name: 'Jalolov.D',
    country: '14-sex',
    age: '22 Yosh',
    rating: 3,
    sports: ['Texnologiya', '14-sex', 'Hadavoy', 'Mator'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar1.png', 
  },
  {
    id: '5',
    name: 'Fayzullayev.D',
    country: 'Tr1',
    age: '32 Yosh',
    rating: 3,
    sports: ['TemirYo`l', 'Tr1', 'Hadavoy', 'Mator'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar1.png', 
  },
  {
    id: '6',
    name: 'Nuriddinov.K',
    country: '63-sex',
    age: '31 Yosh',
    rating: 3,
    sports: ['Universitite', '63-sex', 'Footboll', 'Maydon'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar1.png', 
  },
  {
    id: '7',
    name: 'Jalolov.D',
    country: '14-sex',
    age: '22 Yosh',
    rating: 3,
    sports: ['Texnologiya', '14-sex', 'Hadavoy', 'Mator'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar1.png', 
  },
  {
    id: '8',
    name: 'Jalolov.D',
    country: '14-sex',
    age: '22 Yosh',
    rating: 3,
    sports: ['Texnologiya', '14-sex', 'Hadavoy', 'Mator'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar1.png', 
  },
];

const NewsHome = () => {
  
  const renderFriend = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.info}>
        <Text><Text style={styles.name}>Aftor: {item.name}</Text></Text>
          <Text style={styles.details}>{item.country} - {item.age}</Text>
          <View style={styles.ratingContainer}>
            {Array.from({ length: 1 }).map((_, index) => (
              <Text key={index} style={styles.star}>
                 {item.rating}
              </Text>
            ))}
          </View>
          <Text style={styles.sports}>{item.sports.join(' | ')}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ko`proq</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
   <View>
    <View style={styles.topTextCont}>
      <Text style={styles.topText}>Bugungi Dolzarb yangiliklar</Text>
    </View>
    <View >
      <FlatList
        style={{marginBottom:250,}}
        data={friends}
        renderItem={renderFriend}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
      />
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
  },
  topTextCont:{
    marginTop:40,
    

  },
  topText:{
   fontSize:19,
   textAlign:'center'

  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fbfbfb',
    borderWidth:0.5,
    borderColor:'#DCDCDC',
    padding: 5,
    borderRadius: 15,
    marginBottom: 0.5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 16,
    color: '#cef5e7',
  },
  sports: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  button: {
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor: '#2ECC71',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#2ECC71',
    fontSize: 16,
  },
});

export default NewsHome;
