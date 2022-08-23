import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Card = ({ name, username, id, company, website }) => {
  const IMAGE_URL = 'https://source.unsplash.com/random/200x200?sig=';
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={{
              uri: IMAGE_URL + id,
            }}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.text_container}>
            <View style={styles.first_row}>
              <Text style={styles.name_text}>{name}</Text>

              <Text style={styles.website_text}>{website}</Text>
            </View>
            <Text style={styles.username_text}>{username}</Text>

            <View style={styles.second_row}>
              <Text style={styles.comany_name}>{company.name}</Text>
              <View style={styles.heart_container}>
                <TouchableOpacity
                  onPress={() => console.log('Added!')}
                  activeOpacity={0.7}
                  style={styles.heart}
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
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
    backgroundColor: '#fff',
    shadowColor: '#171717',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  content: {
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: 100,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text_container: { flex: 1, marginLeft: 12 },
  // first row
  first_row: { flexDirection: 'row' },
  name_text: { fontSize: 22, paddingRight: 16 },
  website_text: {
    textAlign: 'right',
    flex: 1,
    fontSize: 15,
    paddingRight: 16,
    paddingTop: 7,
  },
  username_text: { fontSize: 18, paddingRight: 16 },
  // second row
  second_row: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  comany_name: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 15,
    paddingRight: 16,
  },
  heart_container: {
    flex: 1,
    marginLeft: 14,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    alignItems: 'end',
    justifyContent: 'end',
    height: 40,
    width: 40,
  },
  heart: {
    marginLeft: 14,
    flexDirection: 'row',
    marginRight: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
});
export default Card;
