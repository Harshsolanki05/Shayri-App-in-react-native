import React from "react";
import { StyleSheet, Vibration, View, Text, Pressable, Alert, ScrollView } from "react-native";

export const SayriList = ({route,navigation}) =>{

    const {number,color} = route.params;
                    
    const itemarr =['Alone', 'Angry', 'anniversary', 'Attitude', 'Awesome', 'Akward', 'Beard', 'Beautiful', 'Best', 'Bike', 'Birthday', 'Break Up', 'Brother', 'Busy', 
                    'Cheat', 'Chaildhood', 'Clever', 'College', 'Cool', 'Creative', 'Cute', 'Dance', 'Emotional', 'Exam', 'Facebook', 'Family', "Father's Day", 'Flirt',
                    'Food', 'Forgiveness', 'Friends', 'Funny', 'God', 'Good Morning', 'Good Night', 'Gym', 'Happiness', 'Hate You', 'Heart Touching', 'Heartbreak', 'Hindi',
                    'Home', 'Hot', 'Hurt', 'Husband', 'Inspiritional', 'Insult', 'jealous', 'Kids', 'Kiss', 'Life', 'Lonely', 'love', 'Marriage', 'Men', 'Miss You', 'Monday',
                    "Mother's Day", 'Motivational', 'Moving On', 'Music', 'Naughty', 'Pain', 'Parents', 'Party', 'Pets', 'Punjabi', 'Quotes', 'Rain', 'Relationship', 'Romantic',
                    'Sad', 'School', 'Selfie', 'Selfish', 'Shoping', 'Sick', 'Single', 'Sister', 'Smart', 'Smile', 'Sorry', 'Success', 'Summer', 'Sunday', 'Sweet', 'Tears',
                    'Technology', 'Thank You', 'Though', 'Tired', 'True', 'Trust', 'Unique', 'Weekend', 'Whatsapp', 'Wife', 'Winter', 'Wise', 'Women', 'Work']

        const ARRAY=[
                        [  
                            "The Pepole, and the pepole alone, are the motive force in the making of world history.",
                            "It's time to end the cruel slaughter of whales and leave these magnificent creatures alone.",
                            "The soul that sees beauty may sometimes walk alone.",
                            "I restore myself when I'm alone.",
                            "They are all gone into the world of light, and I alone sit lingering here."
                        ],
                        [ 
                            "Always write angry letters to your enemies. Never mail them.",
                            "Where there is anger, there is always pain underneath.",
                            "A fool gives full vent to his anger, but a wise man keeps himself under control.",
                            "Not the fastest horse can catch a word spoken in anger.",
                            "Never do anything when you are in a temper, for you will do everything wrong."
                        ],
                        [ 
                            "Blessings and your teachings in making my life meaningful.Thank you for being my life.",
                            "I am so lucky to have you as my husband and this is my best day in my life. Happy anniversary",
                            "A happy wife is a happy life.",
                            "True love isn't love at first sight but love at every sight.Happy Anniversary.",
                            "To the beautiful couple on this land, May your anniversary be Happy and Grand. Happy Anniversary"
                        ],
                        [
                            "For success, attitude is as much important as ability.",
                            "Wonders why people keep doing the same old things, but yet expect a different outcome!!",
                            "Attitude is like underwear - don't show it just wore it.",
                            "The road to success is always under construction.",
                            "Work until you don't have to, introduce yourself."
                        ],
                        [
                            "Sometimes all you need is love. Lol, just kidding, you need money. :').",
                            "I really need a day in between Saturday and Sunday.",
                            "Was going to rob a bank today but the pen was chained to the desk.",
                            "The only normal people you know are the ones you don't know very well.",
                            "Eight letters, three words, one regret. I miss you."
                        ],
                        [
                            "That awkward moment  when you accidentally call your boss 'Honey'.",
                            "That awkward moment  when you want to buy something, check the price and sadly, leave it there.",
                            "That awkward moment  when a teacher catches you texting.",
                            "The awkward moment  when you have crunchy food in a room full of silent people.",
                            "The awkward moment  when you think a customer is a salesperson.",
                        ],
                        [
                            "He who sacrifices his beard for a woman deserves neither.",
                            "I beleive in beards",
                            "You call it facial hair, I call it awesomeness escaping through my face.",
                            "Men don't cry, they water their beard !",
                            "There's a name for people without beards... WOMEN!",
                        ],
                        [
                            "What lies behind us, and what lies before us are tiny matters compared to what lies within us.",
                            "If you are reading this, you are beautiful. Smile & let the world show it :)",
                            "I don't like standard beauty - there is no beauty without strangeness.",
                            "By plucking her petals, you do not gather the beauty of the flower.",
                            "Tell them dear, that if eyes were made for seeing, Then beauty is its own excuse for being."
                        ],
                        [
                            "I always advise people never to give advice.",
                            "GIRL: Describe me in 1 word. —- BOY: Mine ;)",
                            "I am not virgin, My life f**ks me everyday.",
                            "Attitude is a little thing that makes a big difference.",
                            "Wise men don't need advice. Fools won't take it."
                        ],
                        [
                            "I don't ride a bike to add days to my life. I ride a bike to add life to my days.",
                            "Run the race of your life at your own pace.",
                            "Two wheels move the soul.",
                            "Don't count laps. Make every lap count.",
                            "It's not a race. It's a journey enjoy the moment.",
                        ],
                        [ 
                            "The Pepole, and the pepole alone, are the motive force in the making of world history.",
                            "It's time to end the cruel slaughter of whales and leave these magnificent creatures alone.",
                            "The soul that sees beauty may sometimes walk alone.",
                            "I restore myself when I'm alone.",
                            "They are all gone into the world of light, and I alone sit lingering here."
                        ],
                        [ 
                            "Always write angry letters to your enemies. Never mail them.",
                            "Where there is anger, there is always pain underneath.",
                            "A fool gives full vent to his anger, but a wise man keeps himself under control.",
                            "Not the fastest horse can catch a word spoken in anger.",
                            "Never do anything when you are in a temper, for you will do everything wrong."
                        ],
                        [ 
                            "Blessings and your teachings in making my life meaningful.Thank you for being my life.",
                            "I am so lucky to have you as my husband and this is my best day in my life. Happy anniversary",
                            "A happy wife is a happy life.",
                            "True love isn't love at first sight but love at every sight.Happy Anniversary.",
                            "To the beautiful couple on this land, May your anniversary be Happy and Grand. Happy Anniversary"
                        ],
                        [
                            "For success, attitude is as much important as ability.",
                            "Wonders why people keep doing the same old things, but yet expect a different outcome!!",
                            "Attitude is like underwear - don't show it just wore it.",
                            "The road to success is always under construction.",
                            "Work until you don't have to, introduce yourself."
                        ],
                        [
                            "Sometimes all you need is love. Lol, just kidding, you need money. :').",
                            "I really need a day in between Saturday and Sunday.",
                            "Was going to rob a bank today but the pen was chained to the desk.",
                            "The only normal people you know are the ones you don't know very well.",
                            "Eight letters, three words, one regret. I miss you."
                        ],
                        [
                            "That awkward moment  when you accidentally call your boss 'Honey'.",
                            "That awkward moment  when you want to buy something, check the price and sadly, leave it there.",
                            "That awkward moment  when a teacher catches you texting.",
                            "The awkward moment  when you have crunchy food in a room full of silent people.",
                            "The awkward moment  when you think a customer is a salesperson.",
                        ],
                        [
                            "He who sacrifices his beard for a woman deserves neither.",
                            "I beleive in beards",
                            "You call it facial hair, I call it awesomeness escaping through my face.",
                            "Men don't cry, they water their beard !",
                            "There's a name for people without beards... WOMEN!",
                        ],
                        [
                            "What lies behind us, and what lies before us are tiny matters compared to what lies within us.",
                            "If you are reading this, you are beautiful. Smile & let the world show it :)",
                            "I don't like standard beauty - there is no beauty without strangeness.",
                            "By plucking her petals, you do not gather the beauty of the flower.",
                            "Tell them dear, that if eyes were made for seeing, Then beauty is its own excuse for being."
                        ],
                        [
                            "I always advise people never to give advice.",
                            "GIRL: Describe me in 1 word. —- BOY: Mine ;)",
                            "I am not virgin, My life f**ks me everyday.",
                            "Attitude is a little thing that makes a big difference.",
                            "Wise men don't need advice. Fools won't take it."
                        ],
                        [
                            "I don't ride a bike to add days to my life. I ride a bike to add life to my days.",
                            "Run the race of your life at your own pace.",
                            "Two wheels move the soul.",
                            "Don't count laps. Make every lap count.",
                            "It's not a race. It's a journey enjoy the moment.",
                        ],
                        [
                            "I don't ride a bike to add days to my life. I ride a bike to add life to my days.",
                            "Run the race of your life at your own pace.",
                            "Two wheels move the soul.",
                            "Don't count laps. Make every lap count.",
                            "It's not a race. It's a journey enjoy the moment.",
                        ],
                        
                    ]

    

    return(
        <>
            <View style={[{backgroundColor:color},style.main]}>
                <ScrollView>
                <View style={style.peta}>

                    {
                        ARRAY.map((val,ind)=>{
                            if(ind==number){
                                return(
                                    ARRAY[number].map((val)=>{
                                        return(
                                            <Pressable style={[{backgroundColor:color},style.sayri]} onPress={()=>{navigation.navigate('shayri',{"shayri":val,"color":color,"item":itemarr[ind]})}}>
                                                <Text style={style.txt}>{val}</Text>
                                            </Pressable>
                                        )
                                    })                              
                                )
                            }
                        })
                    }
                </View>
                </ScrollView>
            </View>
        </>
    )
}
const style = StyleSheet.create({
    main:{
        height:"100%",
    },
    peta:{
        height:1000,
        width:"94%",
        alignSelf:"center",
        justifyContent:"space-evenly"     
    },
    sayri:{
        height:"15%",        
        borderRadius:15,
        shadowColor:"black",
        elevation:20,
    },
    txt:{
        height:"100%",
        width:"80%",
        padding:3,
        fontSize:23,
        color:"white",
        textAlign:"justify",
        textAlignVertical:"center",
        alignSelf:"center",
        fontWeight:"900"
    }
})