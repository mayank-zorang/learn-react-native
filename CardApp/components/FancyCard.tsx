import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style ={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
            source={{
                uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/e3/4b/img-20180921-184349-largejpg.jpg?w=1200&h=1200&s=1'
            }}
            style ={styles.cardImage}
        />
        <View style ={styles.cardBody}>
            <Text style ={styles.cardTitle}>Hawa Mahal</Text>
            <Text style ={styles.cardLabel}>Pink City, Jaipur</Text>
            <Text style ={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. 
            Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.</Text>
            <Text style ={styles.cardFooter}>12 mins away</Text>
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
        height: 360,
        borderRadius: 8,
        marginVertical: 12, 
        marginLeft: 12,
        marginRight: 12,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,

    },
    cardBody: {
        color: '#000000',
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,

    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6,

    },
    cardDescription: {
        color: '#758283',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,

    },
    cardFooter: {
        color: '#000000',
    }
})