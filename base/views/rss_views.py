from django.contrib.syndication.views import Feed
from django.urls import reverse
from base.models import Product

class LatestArticlesFeed(Feed):
    title = "UberShop"
    link = "/rss/"
    description = "Описание вашего RSS-канала"

    
    def item_title(self):
        return Product.name

    def item_description(self):
        return Product.brand

    def item_link(self):
        return reverse('product_details', args=[Product.pk])