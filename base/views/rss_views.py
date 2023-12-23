from django.contrib.syndication.views import Feed
from django.urls import reverse
from base.models import Product

class latestArticlesFeed(Feed):
    title = "UberShop"
    link = "/"
    description = "Описание вашего RSS-канала"

    def items(self):
        return Product.name
    
    def item_title(self):
        return Product.name

    def item_description(self):
        return Product.brand

    def item_link(self):
        return reverse('product_details', args=[Product.pk])