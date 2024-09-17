import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const MyWorkHelper = () => {

  const [cards, setCards] = useState([
    { id: 1, number: 'Yanvar', },
    { id: 2, number: 'Febrar' },
    { id: 3, number: 'Mart' },
    { id: 4, number: 'Aprel' },
    { id: 5, number: 'May' },
    { id: 6, number: 'Iyun' },
    { id: 7, number: 'Iyul' },
    { id: 8, number: 'Avgust' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Barcha bajargan ishlarim</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.carouselContainer}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map((card) => (
          <View key={card.id} style={styles.cardContainer}>
            <Text style={styles.cardNumber}>{card.number}</Text>
          </View>
        ))}
      </ScrollView>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00008B',
  },
  cardNumber: {
    color: "#000000",
  },
  cardContainer: {
    marginHorizontal: 5,
    width: 70,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 3,
    borderBottomColor: '#ccc',
  },

  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardInfoItem: {
    flex: 1,
  },
  cardInfoLabel: {
    fontSize: 12,
    color: 'gray',
  },
  cardInfoValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  carouselContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 30,
  },
  paymentButton: {
    backgroundColor: '#00008B',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MyWorkHelper;