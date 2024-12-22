import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {white} from '@constants/colors';

import styles from './styles';

function SearchBar({
  onSearch,
  initialValue,
}: {
  onSearch: (query: string) => void;
  initialValue: string;
}) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (text: string) => {
    setValue(text);
    onSearch(text);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder="Buscar activos..."
        placeholderTextColor={white}
        onChangeText={handleChange}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  );
}

export default SearchBar;
