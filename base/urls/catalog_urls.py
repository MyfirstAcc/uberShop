from django.urls import path
from base.views import catalog_views as views



urlpatterns = [

    path('', views.getCatalog, name="catalogs"),
    path('<str:pk>/', views.getCatalogProduct, name="catalog"),


   
]
