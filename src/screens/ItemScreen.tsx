import React, {Component, useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {Articles} from '../interfaces/NewsInterface';
import NewsCard from '../components/NewsCard';
import NewsService from '../services/NewsService';

function ItemScreen() {
  const [newsDate, setNewsDate] = useState<Articles[]>([]);

  const fetchNewsCallback = useCallback(async (queryString: string) => {
    const response = await NewsService.getNewsDate(
      queryString,
      'us',
      'business',
    );

    setNewsDate(response);
  }, []);

  const query = 'https://newsapi.org/v2/top-headlines';

  useEffect(() => {
    fetchNewsCallback(query);
  }, [fetchNewsCallback, query]);

  return (
    <View>
      <NewsCard></NewsCard>
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
