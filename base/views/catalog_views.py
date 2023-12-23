
from django.db.models import F
from rest_framework.decorators import api_view
from django.shortcuts import render
from django.db.models import Q

from rest_framework.decorators import api_view
from rest_framework.response import Response

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
    try:
        # Получаем объект TypeProduct по _name
        type_product = TypeProduct.objects.get(_name=name)
        min_price = request.query_params.get('minPrice')
        max_price = request.query_params.get('maxPrice')
        min_rating = request.query_params.get('minRating')
        # Создаем Q-объект для фильтрации
        filter_conditions = Q(type_product=type_product)

        if min_price is not None:
            filter_conditions &= Q(price__gte=min_price)

        if max_price is not None:
            filter_conditions &= Q(price__lte=max_price)

        if min_rating is not None:
            filter_conditions &= Q(rating__gte=min_rating)

        # Фильтруем продукты по условиям
        products = type_product.product_set.filter(filter_conditions)

        print(products)

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    except TypeProduct.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
