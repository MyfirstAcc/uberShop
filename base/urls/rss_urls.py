from django.urls import path
from base.views.rss_views import LatestArticlesFeed

urlpatterns = [
    # другие URL-адреса
    path('', LatestArticlesFeed(), name='article_feed'),
]
