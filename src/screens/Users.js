import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getUsers } from '../Redux/actions/actions';
import Card from '../components/Card';

const Users = () => {
  const { users } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const fetchUsers = () => dispatch(getUsers());
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      {' '}
      <View style={{ flex: 1, marginTop: 10, marginorizontal: 20 }}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <Card
                name={item.name}
                username={item.username}
                company={item.company}
                id={item.id}
                website={item.website}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
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
export default Users;
