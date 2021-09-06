export interface NewsItem {
    status: string,
    totalResults: number,
    articles: Articles
}

export interface Articles{
source:Source,
author:string,
title:string,
description:string,
url:string,
urlToImage:string,
publishedAt:string,// todo time "2021-09-03T05:54:30Z",
content:string
}

export interface Source {    
    id:string,
    name:string
}