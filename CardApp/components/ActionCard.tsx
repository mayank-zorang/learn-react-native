import { 
    StyleSheet, 
    Text, 
    View, 
    Linking, 
    Image, 
    TouchableOpacity 
} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style ={styles.headingText}>Blog Card</Text>
        <View style ={[styles.card, styles.elevatedCard]}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>
                    What's new in Javascript 21 - ES12
                </Text>
            </View>
            <Image 
                source={{
                    uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
                }}
                style={styles.cardImage}
            />
            <View style={ styles.bodyContainer}> 
                <Text numberOfLines={3}>Just like every year, Javascript brings in new features. 
                    This year javascript is bringing 4 new features, which are almost in production rollout. 
                    I won't be wasting much more time and directly jump to code with easy to understand examples.</Text>
            </View>
            <View style={ styles.footerContainer}> 
                <TouchableOpacity
                    onPress={()=> openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                    <Text style={styles.socialLink}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> openWebsite('https://medium.com/@mayank.paswan')}>
                    <Text style={styles.socialLink}>Follow Me</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 350,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },
    headingContainer:{
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',

    },
    cardImage: {
        height: 100,
    },
    bodyContainer: {
        padding: 10,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',   
        justifyContent: 'space-evenly',
    },
    socialLink: {
        fontSize: 16,
        color: '#000',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
    }

})