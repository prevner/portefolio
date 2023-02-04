import React,{useContext, useState} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import { profile , Experiences, hobbie, competences} from '../data/';


const Home = () => {
  
  const [profiles, setProfile] = React.useState(profile);  
  const [Experience, setExperiences] = React.useState(Experiences);  
  const [hobbies,sethobbies] = React.useState(hobbie);  
  const [competence,setcompetence] = React.useState(competences);  
  console.log(competence)
  function HeaderSection(myExperiences) {
    return (
      <View style={styles.profile}>        
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop : 40}}>
                           
                            <Image                                 
                                source = {require('../../assets/carte.png')} 
                                style={{height: 100, width:100,borderRadius:100/2}}/>
                                                               
          </View>
          <View style={{flex:1, marginTop:25, alignItems : "center"}}>            
                  <Text style={{ color: "white"}}>
                    {profile.nom}
                  </Text>
                  <Text style={{ color: "white"}}>
                    {profile.prenom}
                  </Text>
          </View>
      </View>
    );
  }

  function ExperiencesInfo(Experience) {

    const RenderOneExperience = ({ item, index }) =>{
      return (
        <View >
            <Text  style={{color:"white"}}>{item.annee} {item.info}</Text>
             
        </View>
      )
    }
    return(
      <View> 
          <FlatList           
              data={Experience}
              renderItem={RenderOneExperience}
          />      
      </View>
    )    
  }

  function HobbyInfo(hobbies) {

    const RenderHobby = ({ item, index }) =>{
      return (
        <View >
            <Text  style={{color:"white"}}> {item.hobby}</Text>             
        </View>
      )
    }
    return(
      <View> 
          <FlatList           
              data={hobbies}
              renderItem={RenderHobby}
          />      
      </View>
    )    
  }

  function CompetenceInfo(competence) {

    const RenderCompetence = ({ item, index }) =>{
      return (
        <View >
            <Text  style={{color:"white"}}> {item.info}</Text>             
        </View>
      )
    }
    return(
      <View> 
          <FlatList           
              data={competence}
              renderItem={RenderCompetence}
          />      
      </View>
    )    
  }

  return (
    <SafeAreaView style={styles.mainContainer}>  
        {/* identity */}  
        <View  style={styles.HeaderSection}>
            {HeaderSection(profile)}
         </View>
         {/* bodySection */}
         {/* experiences */}
         <View style={{backgroundColor : "#397af8",margin:5, padding : 10,}}>
                <Text style={{ fontSize: 22,marginBottom : 5, color:"white", fontWeight: 'bold'}}>Experiences</Text>            
                {ExperiencesInfo(Experiences)}
         </View>         
         <View style={{backgroundColor : "#397af8",margin:5, padding : 10,}}>
                <Text style={{ fontSize: 22,marginBottom : 5, color:"white", fontWeight: 'bold'}}>Hobbies</Text>            
                {HobbyInfo(hobbies)}
         </View>         
         <View style={{backgroundColor : "#397af8",margin:5, padding : 10,}}>
                <Text style={{ fontSize: 22,marginBottom : 5, color:"white", fontWeight: 'bold'}}>Competences</Text>            
                {CompetenceInfo(competence)}
         </View>         
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer:{
    flex : 1,
    backgroundColor : "white",
    marginTop : 15,
  },
  HeaderSection:{ 
    height: 150,
    margin : 5,    
},
 profile: { 
        flex: 1, 
        flexDirection: 'column', 
        paddingHorizontal: 24, 
        alignItems: 'center', 
        backgroundColor : "#397af8",       
      },  
 
})