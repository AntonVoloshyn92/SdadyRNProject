import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Articles} from '../interfaces/NewsInterface';
import NewsCard from '../components/NewsCard';
import NewsService from '../services/NewsService';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NewsStackParamList} from '../navigation/navigation.types';
import {connect} from 'react-redux';
import {RootState} from '../store';
import {isWhiteThemeSelector} from '../store/app/app.selector';

interface NewsScreenProps {}

const NewsScreen: React.FC<
  NewsScreenProps & ReturnType<typeof mapStateToProps>
> = ({isWhiteTheme}) => {
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
    <View
      style={[styles.workSpace, isWhiteTheme ? styles.main : styles.mainDark]}>
      <FlatList
        data={news}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => {
          return (
            <NewsCard
              article={item}
              onClick={() => {
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

const mapStateToProps = (state: RootState) => ({
  isWhiteTheme: isWhiteThemeSelector(state),
});

const styles = StyleSheet.create({
  workSpace: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainDark: {
    flex: 1,
    backgroundColor: '#6e798a',
  },
});

export default connect(mapStateToProps)(NewsScreen);
