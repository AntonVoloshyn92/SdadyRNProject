import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {Articles} from '../interfaces/NewsInterface';
import NewsCard from '../components/NewsCard';
import NewsService from '../services/NewsService';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';

export type NewsStackParamList = {
  NewsItem: {childId: Articles};
};

function ItemScreen({navigation}) {
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
          return (
            <NewsCard
              item={item}
              onClick={() => {
                navigation.navigate('NewsDetailsScreen', {news: item});
              }}
            />
          );
        }}
      />
    </View>
  );
}

export default ItemScreen;
