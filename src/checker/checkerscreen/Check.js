import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React,{useState} from 'react'
import SyncStorge from 'sync-storage'

export default function Check() {
  const [workPlace, setWorkPlace] = React.useState([])
  const [modaVisible, setModalVisible] = React.useState(false)
  const token = SyncStorge.get('token')
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [workplaceStorage, setWorkPlaceStaorage] = React.useState([])
  
  console.log(workPlace)

const fetchdata = async () => {
    fetch('http://192.168.80.101:8080/api/workPlace/get_workplace', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + token
      },
    
  })
      .then(response => response.json())
      .then(responseData => {
        setWorkPlace(responseData['object'])
        setWorkPlaceStaorage(responseData['object'])
        SyncStorge.set('workplace',responseData['object'] )
        
      })
      .catch(error => {
          console.log(error);
      });
}
  

  
React.useEffect(() => {
  console.log(workPlace.length)
    fetchdata()
  
},[])

const onRefresh = () => {
  setRefreshing(true);
  fetchdata();
  SyncStorge.set('workplace',workplaceStorage )
  setTimeout(() => {
    setRefreshing(false);
  }, 1000); // Refresh indicator will be visible for at least 1 second
};


  return (
    <View style={styles.container}>
       <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
            {
              workPlace.map((item,index)=>{
                return(
                  <Pressable onPress={() => onGetId(item.id)}>
                    <View key={index} style={styles.scrollContainer}>
                      <View style={styles.scrollmid}>
                          <Text style={styles.scrollText}>{item.nameaOfWorkPlace}</Text>
                        </View>
                     </View>
                  </Pressable>
                )
              })
            }
          </ScrollView>
        </View>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 29,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
  },
 
});