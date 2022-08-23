import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Card = ({ name, username, id, company, website }) => {
  const IMAGE_URL = 'https://source.unsplash.com/random/200x200?sig=';
  return (
    <>
      <View
        style={{
          marginVertical: 14,
          backgroundColor: '#fff',
          shadowColor: '#171717',
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}
        >
          <Image
            source={{
              uri: IMAGE_URL + id,
            }}
            resizeMode="cover"
            style={{
              width: 100,
              height: '100%',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 22, paddingRight: 16 }}>{name}</Text>

              <Text
                style={{
                  textAlign: 'right',
                  flex: 1,
                  fontSize: 15,
                  paddingRight: 16,
                  paddingTop: 7,
                }}
              >
                {website}
              </Text>
            </View>
            <Text style={{ fontSize: 22, paddingRight: 16 }}>{username}</Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 15, paddingRight: 16 }}>
                {company.name}
              </Text>
              <TouchableOpacity
                onPress={() => console.log('Added!')}
                activeOpacity={0.7}
                style={{
                  marginLeft: 14,
                  flexDirection: 'row',
                  padding: 2,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40,
                }}
              >
                <MaterialIcons
                  color="orange"
                  size={32}
                  name="favorite-outline"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Card;
