import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";


export const Home = ({navigation}) =>{

    const colorarr=['#00AEEF', '#ff0000', '#FFD700', '#B22222', '#DA70D6', '#FCBEAC', '#FF4500', '#FF1694', '#50CB78', '#00308F', '#710193', '#F4C430', '#33acdd','#Fe2712', '#E4d00A', '#FF0000', '#FF00FF', '#Fd6c9e', '#E03c31', '#ec3b83', '#50c878', '#051094', '#800080', '#E6Bd1a', '#45b3e0', '#dc143c',
                    '#FFEF00', '#800000', '#6A0DAD', '#DA70D6', '#FF4500', '#F25278', '#3cB043', '#000080', '#00AEEF', '#00AEEF', '#ff0000', '#FFD700', '#B22222','#DA70D6', '#FCBEAC', '#FF4500', '#FF1694', '#50CB78', '#00308F', '#710193', '#F4C430', '#33acdd', '#Fe2712', '#E4d00A', '#FF0000', '#FF00FF',
                    '#Fd6c9e', '#E03c31', '#ec3b83', '#50c878', '#051094', '#800080', '#E6Bd1a', '#45b3e0', '#dc143c', '#FFEF00', '#800000', '#6A0DAD', '#DA70D6','#FF4500', '#F25278', '#3cB043', '#000080', '#00AEEF', '#00AEEF', '#ff0000', '#FFD700', '#B22222', '#DA70D6', '#FCBEAC', '#FF4500', '#FF1694', 
                    '#50CB78', '#00308F', '#710193', '#F4C430', '#33acdd', '#Fe2712', '#E4d00A', '#FF0000', '#FF00FF', '#Fd6c9e', '#E03c31', '#ec3b83', '#50c878','#051094', '#800080', '#E6Bd1a', '#45b3e0', '#dc143c', '#FFEF00', '#800000', '#6A0DAD', '#DA70D6', '#FF4500'];

    const itemarr =['Alone', 'Angry', 'anniversary', 'Attitude', 'Awesome', 'Akward', 'Beard', 'Beautiful', 'Best', 'Bike', 'Birthday', 'Break Up', 'Brother', 'Busy','Cheat', 'Chaildhood', 'Clever', 'College', 'Cool', 'Creative', 'Cute', 'Dance', 'Emotional', 'Exam', 'Facebook', 'Family', "Father's Day", 'Flirt',
                    'Food', 'Forgiveness', 'Friends', 'Funny', 'God', 'Good Morning', 'Good Night', 'Gym', 'Happiness', 'Hate You', 'Heart Touching', 'Heartbreak', 'Hindi','Home', 'Hot', 'Hurt', 'Husband', 'Inspiritional', 'Insult', 'jealous', 'Kids', 'Kiss', 'Life', 'Lonely', 'love', 'Marriage', 'Men', 'Miss You', 'Monday',
                    "Mother's Day", 'Motivational', 'Moving On', 'Music', 'Naughty', 'Pain', 'Parents', 'Party', 'Pets', 'Punjabi', 'Quotes', 'Rain', 'Relationship', 'Romantic','Sad', 'School', 'Selfie', 'Selfish', 'Shoping', 'Sick', 'Single', 'Sister', 'Smart', 'Smile', 'Sorry', 'Success', 'Summer', 'Sunday', 'Sweet', 'Tears',
                    'Technology', 'Thank You', 'Though', 'Tired', 'True', 'Trust', 'Unique', 'Weekend', 'Whatsapp', 'Wife', 'Winter', 'Wise', 'Women', 'Work']

    const imgarr  =[require('./img/category1.png'), require('./img/category2.png'), require('./img/category3.png'), require('./img/category4.png'), require('./img/category5.png'),require('./img/category6.png'), require('./img/category7.png'), require('./img/category8.png'), require('./img/category9.png'), require('./img/category10.png'),
                    require('./img/category11.png'), require('./img/category12.png'), require('./img/category13.png'), require('./img/category14.png'), require('./img/category15.png'),require('./img/category16.png'), require('./img/category17.png'), require('./img/category18.png'), require('./img/category19.png'), require('./img/category20.png'),
                    require('./img/category21.png'), require('./img/category22.png'), require('./img/category23.png'), require('./img/category24.png'), require('./img/category25.png'),require('./img/category26.png'), require('./img/category27.png'), require('./img/category28.png'), require('./img/category29.png'), require('./img/category30.png'),
                    require('./img/category31.png'), require('./img/category32.png'), require('./img/category33.png'), require('./img/category34.png'), require('./img/category35.png'),require('./img/category36.png'), require('./img/category37.png'), require('./img/category38.png'), require('./img/category39.png'), require('./img/category40.png'),
                    require('./img/category41.png'), require('./img/category42.png'), require('./img/category43.png'), require('./img/category44.png'), require('./img/category45.png'),require('./img/category46.png'), require('./img/category47.png'), require('./img/category48.png'), require('./img/category49.png'), require('./img/category50.png'),
                    require('./img/category51.png'), require('./img/category52.png'), require('./img/category53.png'), require('./img/category54.png'), require('./img/category55.png'),require('./img/category56.png'), require('./img/category57.png'), require('./img/category58.png'), require('./img/category59.png'), require('./img/category60.png'),
                    require('./img/category61.png'), require('./img/category62.png'), require('./img/category63.png'), require('./img/category64.png'), require('./img/category65.png'),require('./img/category66.png'), require('./img/category67.png'), require('./img/category68.png'), require('./img/category69.png'), require('./img/category70.png'),
                    require('./img/category71.png'), require('./img/category72.png'), require('./img/category73.png'), require('./img/category74.png'), require('./img/category75.png'),require('./img/category76.png'), require('./img/category77.png'), require('./img/category78.png'), require('./img/category79.png'), require('./img/category80.png'),
                    require('./img/category81.png'), require('./img/category82.png'), require('./img/category83.png'), require('./img/category84.png'), require('./img/category85.png'),require('./img/category86.png'), require('./img/category87.png'), require('./img/category88.png'), require('./img/category89.png'), require('./img/category90.png'),
                    require('./img/category91.png'), require('./img/category92.png'), require('./img/category93.png'), require('./img/category94.png'), require('./img/category95.png'),require('./img/category96.png'), require('./img/category97.png'), require('./img/category98.png'), require('./img/category99.png'), require('./img/category100.png'),
                    require('./img/category101.png')]   

    return(
        <>
            <View style={style.main}>
                <View style={style.header}>
                    <View style={style.header_first}>
                        <Text style={style.heade_name}>Best Quotes & Status</Text>
                        <View style={style.other}>
                            <Pressable style={style.prime}>
                                <Image style={style.primeicon} source={require('./img/Crownking.png')} ></Image>
                            </Pressable>
                            <Pressable style={style.prime}>
                                <Image style={style.primeicon2} source={require('./img/sidebar.png')} ></Image>
                            </Pressable>
                        </View>
                    </View>
                    <View style={style.header_second}>
                        <View style={style.serch_perent}>
                            <Image style={style.serchicon} source={require('./img/search.png')} resizeMode="contain"></Image>
                            <TextInput style={style.search} placeholder="Search..."></TextInput>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={style.peta}>

                        {
                            itemarr.map((val,ind)=>{
                                return(
                                    <Pressable style={[{backgroundColor:colorarr[ind]} , style.item]} onPress={()=>{navigation.navigate('shayrilist',{"number":ind,"color":colorarr[ind],"name":itemarr[ind]})}}>
                                        <Text style={style.item_txt}> {itemarr[ind]}</Text>
                                        <View style={style.item_img_perent}>
                                            <Image source={imgarr[ind]} style={style.imtem_img}></Image>
                                        </View>
                                    </Pressable>
                                )
                            })
                        }
                        <Pressable style={{height:"1.6%",width:"45%",}}></Pressable>
                    </View>
                </ScrollView>   
            </View>
        </>
    )
}
const style = StyleSheet.create({
    
    main:{
        height:"100%",
        backgroundColor:"white",
    },
    header:{      
        height:120,      
    },
    header_first:{
        height:"50%",
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    heade_name:{
        height:"100%",
        width:"60%",       
        fontSize:23,
        fontWeight:"900",
        textAlign:"center",
        color:"black",
        textAlignVertical:"center",
    },
    other:{
        height:"100%",
        width:"30%",
        flexDirection:"row",       
    },
    prime:{
        height:"100%",
        width:"50%",
        justifyContent:"center"       
    },
    primeicon:{
        height:"50%",
        width:"50%",
        resizeMode:"contain",
        alignSelf:"center",
    },
    primeicon2:{
        height:"50%",
        width:"80%",
        resizeMode:"stretch"

    },

    header_second:{
        height:"50%",       
        justifyContent:"center",
    },
    serch_perent:{
        height:"70%",
        width:"92%",
        borderRadius:30,
        alignSelf:"center",
        backgroundColor:"rgba(0,0,0,0.1)",
        flexDirection:"row",
    },
    serchicon:{
        height:"100%",
        width:"15%",
        resizeMode:"center"
  
    },
    search:{
        height:"100%",
        width:"85%",
        fontSize:21,
        textAlignVertical:"center",       
    },

    peta:{
        height:6100,       
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        alignContent:"space-around"
    },
    item:{
        height:"1.7%",
        width:"45%",        
        borderRadius:10,       
        shadowColor:"black",
        elevation:15,
    },
    item_txt:{
        height:"30%", 
        fontSize:23,
        fontWeight:"900",
        textAlignVertical:"center",
        color:"white",     
    },
    item_img_perent:{
        height:"70%",
        width:"95%",       
    },
    imtem_img:{
        height:"90%",
        width:"50%",
        alignSelf:"flex-end",
        resizeMode:"contain",
    },
})