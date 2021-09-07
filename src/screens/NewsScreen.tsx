import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, StatusBar, FlatList} from 'react-native';
import {Articles, NewsItem} from '../interfaces/NewsInterface';
import NewsCard from '../components/NewsCard';
import NewsService from '../services/NewsService';

function ItemScreen() {
  const [news, setNews] = useState<Articles[]>([]);

  const fetchNewsCallback = useCallback(async (queryString: string) => {
    const response = await NewsService.getNewsDate('us', 'business');
    setNews(response);
  }, []);

  const query = 'https://newsapi.org/v2/top-headlines';

  useEffect(() => {
    fetchNewsCallback(query);
  }, [fetchNewsCallback, query]);

  return (
    <View>
      <FlatList
        data={news}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return <NewsCard item={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#c8ccc9',
    elevation: 5,
    borderRadius: 15,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ItemScreen;
