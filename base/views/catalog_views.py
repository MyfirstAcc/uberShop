from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from base.models import TypeProduct, Product
from base.serializers import TypeProductSerializer, ProductSerializer

from rest_framework import status



@api_view(['GET'])
def getCatalog(request):
    Catalogs = TypeProduct.objects.all()
 
    serializer = TypeProductSerializer(Catalogs, many=True)
    return Response({'catalogs': serializer.data})


@api_view(['GET'])
def getCatalogProduct(request, name):
       # Получаем объект TypeProduct по _id
    catalog = TypeProduct.objects.get(_name=name)

    # Получаем все продукты, связанные с данным каталогом
    products = Product.objects.filter(type_product=catalog)

    # Сериализуем продукты
    serializer = ProductSerializer(products, many=True)

    # Возвращаем данные в виде JSON
    return Response(serializer.data)