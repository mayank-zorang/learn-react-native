import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Mayank Paswan',
            status: 'Just an extra ordinary Teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/141113722?v=4',
        },
        {
            uid: 2,
            name: 'Samar',
            status: 'Product Engineer',
            imageUrl: 'https://avatars.githubusercontent.com/u/130648599?v=4',
        },
        {
            uid: 3,
            name: 'Nitin',
            status: 'Associate Software developer',
            imageUrl: 'https://avatars.githubusercontent.com/u/7863622?v=4',
        },
        {
            uid: 4,
            name: 'Raj Bansal',
            status: 'Product Manager',
            imageUrl: 'https://avatars.githubusercontent.com/u/140143906?v=4',
        },
    ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView 
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image 
                    source={{
                        uri: imageUrl
                    }}
                    style = {styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 12,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    },
    userStatus: {
        fontSize: 12,
    },
})