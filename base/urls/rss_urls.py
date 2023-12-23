from django.urls import path
from base.views import rss_views as views

urlpatterns = [
    # другие URL-адреса
    path('', views.latestArticlesFeed(), name='feed'),
]
