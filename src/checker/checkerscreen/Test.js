import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image,  ScrollView,FlatList, Alert, Pressable } from 'react-native'

export default Test = () => {

  const products = [
    {
      id: 1,
      name: 'Kasbiy',
      price: 'Testlar soni: 25',
      images:[
        'test1',
        'test2',
        'test3',
        'test4',
        'test5',
        'test6',
        'test7',
      ],
      type:[
        'hadavoy1',
        'hadavoy2',
        'hadavoy3',
        'hadavoy4',
        'hadavoy5',
        'hadavoy6',
        'hadavoy7',

      ]
    },
    {
      id: 2,
      name: 'Malakaviy',
      price: 'Testlar soni: 30',
      images:[
        'test1',
        'test2',
        'test3',
        'test4',
        'test5',
        'test6',
        'test7',
      ],
      type:[
        'hadavoy1',
        'hadavoy2',
        'hadavoy3',
        'hadavoy4',
        'hadavoy5',
        'hadavoy6',
        'hadavoy7',

      ]
    },
   
  ]

  const handlePress = () => {
    Alert.alert('id')
  }



    const matches = [
        {
            id:1,
            avatar :'https://bootdey.com/img/Content/avatar/avatar2.png',
            name:'John Doe',
            age:'30',
        },
        {
            id:2,
            avatar :'https://bootdey.com/img/Content/avatar/avatar3.png',
            name:'John Doe',
            age:'30',
        },
        {
            id:3,
            avatar :'https://bootdey.com/img/Content/avatar/avatar4.png',
            name:'John Doe',
            age:'30',
        },
        {
            id:4,
            avatar :'https://bootdey.com/img/Content/avatar/avatar5.png',
            name:'John Doe',
            age:'30',
        },
        {
            id:5,
            avatar :'https://bootdey.com/img/Content/avatar/avatar6.png',
            name:'John Doe',
            age:'30',
        }
    ]

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.avatar} source={{uri:'https://bootdey.com/img/Content/avatar/avatar1.png'}}/>
            <View style={styles.informationContainer}>
                <Text style={styles.name}>Asqarov.T</Text>
                <Text style={styles.label}>Eng faol</Text>
                <Text style={styles.label}>Sex: Tr1</Text>
                <Text style={styles.label}>Natija: 25/25</Text>
                <Text style={styles.label}>Yo`nalish: Xadavoy</Text>
            </View>
        </View>
        
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Eng faollar jadvali</Text>
                <TouchableOpacity  style={styles.seeAllButton}>
                    <Text style={styles.seeAllButtonText}>See all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sectionBody}>
                <ScrollView horizontal contentContainerStyle={styles.sectionScroll}>
                    {matches.map(({avatar, id, name, age}) => (
                        <View style={styles.sectionCard} key={id}>
                            <Image style={styles.sectionImage} source={{ uri: avatar }} />
                            <View style={styles.sectionInfo}>
                                <Text style={styles.sectionLabel}>{name}</Text>
                                <Text style={styles.sectionLabel}>Age: {age}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
          
           
        </View>
        <FlatList
              style={{marginBottom:50}}
              data={products}
              renderItem={({ item:product }) => (
                
                      <View style={styles.card} >
                      <View style={styles.cardContent}>
                        <ScrollView horizontal style={styles.imagesContent}>
                        {product.images.map((image, index) => (
                          <TouchableOpacity onPress={() => {Alert.alert(image.id)}} key={`${product.id}_${index}`}>
                            <View style={styles.productImage}>
                              <View>
                                <Text style={{textAlign:'center'}}>{image}</Text>
                              </View>
                              <View>
                                <View style={{borderBottomWidth:2}}></View>
                              </View>
                              <View style={{flexDirection:'row', height:'20%'}}>
                                <View style={{borderLeftWidth:1}}></View>
                                <View><Text style={{marginLeft:'6%'}}>Test turi     -  
                                {
                                  product.type.map((type,index)=>(
                                    <Text>{type[index]}</Text>
                                  ))
                                }
                                </Text></View>
                              </View>
                              <View>
                                <View><Text></Text></View>
                              </View>
                              
                            </View>
                          </TouchableOpacity>
                        ))}
                        </ScrollView>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>{product.price}</Text>
                      </View>
                      <View style={styles.cardActions}>
                        <TouchableOpacity style={styles.button} onPress={() => {}}>
                          <Text style={styles.buttonText}>Keyinroq topshirish</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => {}}>
                          <Text style={styles.buttonText}>Eng zo`r natijalar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => {}}>
                          <Text style={styles.buttonText}>Qiyinlik darajasi</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
               
              )}
              keyExtractor={item => item.id.toString()}
            />
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFF',
},
header:{
    backgroundColor:'#00BFFF',
    height:200,
    flexDirection:'row',
    alignItems:'center',
    paddingTop: 20,
    paddingHorizontal:16,
  },
  avatar:{
    width:150,
    height:150,
    borderRadius:60
  },
  informationContainer:{
    width:150,
    height:150,
    marginLeft:20,
  },
  name:{
    fontSize:22,
    fontWeight:'bold',
    color:'#ffffff'
  },
  label:{
    fontSize:12,
    color:'#ffffff',
    marginTop:10,
  },
  section:{
    paddingHorizontal:16,
    marginVertical:5,
  },
  sectionHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
  },
  sectionTitle:{
    fontSize:18,
  },
  seeAllButton:{
    backgroundColor:'#A9A9A9',
    padding:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,


  },
  seeAllButtonText:{
    color:'#eee'
  },
  sectionBody:{
    marginTop:5,
  },
  sectionScroll:{
    paddingBottom:1,
  },
  sectionCard: {
    width:100,
    minHeight:100,
    backgroundColor:'#fff',
    shadowColor: '#B0C4DE',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  sectionImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius:40,
  },
  sectionInfo: {
    padding:12,
    marginLeft:15,
  },
  sectionLabel: {
    fontSize: 12,
    marginBottom: 2,
  },
  card: {
    shadowColor: '#B0C4DE',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  productImage: {
    width: 200,
    height: 100,
    margin: 10,
    borderRadius:22,
    borderColor:'#eee',
    borderWidth:1,
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 10,
  },
})
