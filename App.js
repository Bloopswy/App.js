import { StatusBar } from 'expo-status-bar';
import {Image, SectionList,StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const datasource = [
    {data: [{name: 'Sabo', image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-004.png?251031"  },
            {name:'Portgas.D.Ace',image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-002_p1.png?251031"},
            {name:'Gol.D.Roger',image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-003_p1.png?251031"}],
        title: "MultiColour", bgcolor:"#C89B3C", iconcolor:"#fdca41"},
    {data: [{name: 'Shanks', image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-028.png?251031" },
            {name:'Sanji', image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-027.png?251031"}],
        title: "Green", bgcolor:"#8fea81", iconcolor:"#008662"},
    {data: [{name: 'Yamato', image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-054_p1.png?251031" },
            {name:'Boa Hancock', image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-051.png?251031"}],
        title: "Blue", bgcolor:"#6fb6c8", iconcolor:"#045e8c"},
    {data: [{name: 'Jewelry Bonney', image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-100.png?251031" },
            {name:'Kouzuki Hiyori', image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-104.png?251031"}],
        title: "Yellow", bgcolor:"#efe55b", iconcolor:"#bfaa3a"},
    {data: [{name: 'Nefeltari Vivi', image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-012.png?251031" },
            {name:'Makino', image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-015.png?251031"}],
        title: "Red", bgcolor:"#c7181b", iconcolor:"#860f16"},
    {data: [{name: 'Silver Rayleigh', image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-066_p1.png?251031" },
            {name:'Kouzuki Oden', image:"https://en.onepiece-cardgame.com/images/cardlist/card/OP13-063.png?251031"}],
        title: "Purple", bgcolor:"#974b8f", iconcolor:"#5e365f"},
];

const renderItem = ({item}) => {
    return (
        <View style={styles.cardRow}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <Image style={styles.cardImage} source={{uri:item.image}}/>
        </View>
    );
};

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ONE PIECE</Text>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({section}) => (
                    <View style={[styles.header,{backgroundColor:section.bgcolor}]}>
                        <Text style={[styles.sectionHeaderText,{ color: section.iconcolor}]}> {section.title}</Text>
                    </View>
                )
                }
            />
            <View>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>ADD CARD
                        <MaterialCommunityIcons name="cards" size={20} />
                    </Text>

                </TouchableOpacity>

            </View>
            <StatusBar translucent={false}/>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2E9D0",
    },

    title:{
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 55,
        fontStyle: 'italic',

    },

    addButton: {
        backgroundColor: "#9A1F1F",
        alignItems: "center",
        padding: 6,
        margin:15
    },

    addButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

    header: {
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        marginHorizontal: 15,
        borderColor: "#8B4513",
    },

    sectionHeaderText: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
    },

    cardRow: {
        borderWidth: 1,
        borderColor: "#8B4513",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginHorizontal: 15,
        backgroundColor: "#FFF5E1",

    },

    textStyle: {
        fontSize: 20,
        fontWeight: "bold",
    },

    cardImage: {
        width: 200,
        height: 285,
    },


});

export default App;