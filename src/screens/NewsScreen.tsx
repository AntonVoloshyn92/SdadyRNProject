import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {Articles} from '../interfaces/NewsInterface';
import NewsCard from '../components/NewsCard';
import NewsService from '../services/NewsService';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NewsStackParamList} from '../navigation/navigation.types';

interface NewsScreenProps {}

const NewsScreen: React.FC<NewsScreenProps> = () => {
  const [news, setNews] = useState<Articles[]>([]);

  const navigation =
    useNavigation<StackNavigationProp<NewsStackParamList, 'NewsScreen'>>();

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
              article={item}
              onClick={url => {
                navigation.navigate('NewsDetailsScreen', {
                  article: item,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default NewsScreen;
